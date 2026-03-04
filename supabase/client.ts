import { createBrowserClient } from '@supabase/ssr';

function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );
}

export const supabase = createClient();

// Helper function to upload profile image
export async function uploadProfileImage(file: File, username: string) {
  const fileExt = file.name.split('.').pop();
  const fileName = `${username}-${Date.now()}.${fileExt}`;
  const filePath = `profiles/${fileName}`;

  const { data, error } = await supabase.storage
    .from('users_images')
    .upload(filePath, file);

  if (error) {
    throw error;
  }

  // Get public URL
  const {
    data: { publicUrl },
  } = supabase.storage.from('users_images').getPublicUrl(filePath);

  return publicUrl;
}

export async function saveUserData(userData: {
  userId: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phoneNumber: string;
  cprNumber: string;

  agreeToTerms: boolean;
  profileImageUrl?: string;
}) {
  const { error: profileError } = await supabase.from('users').insert({
    id: userData.userId,
    first_name: userData.firstName,
    last_name: userData.lastName,
    username: userData.username,
    mobile_phone_number: userData.phoneNumber,
    email_address: userData.email,
    cpr_number: userData.cprNumber,
    agree_to_terms: userData.agreeToTerms,
    avatar: userData.profileImageUrl,
    terms_agreed_at: new Date().toISOString(),
    days:0,
  });

  if (profileError) {
    console.error('Profile creation error:', profileError);
    return profileError;
  }
}

export async function getUserDays(userId: string) {
  const { data, error } = await supabase
    .from('users')
    .select('days,created_at,days_completed')
    .eq('id', userId)
    .single();
 
  if (error) throw error;
  return data;
}

// Update user days incrementally
export async function updateUserDays(
  userId: string,
  day: number // 1 → 10
) {
  if (day < 1 || day > 10) {
    throw new Error("Day must be between 1 and 10");
  }

  const user = await getUserDays(userId);
  if (!user) throw new Error("User not found");

  const currentDays = user.days ?? 0;

  // Cap at 10
  if (currentDays >= 10) {
    return { message: "Days already maxed at 10" };
  }

  // Ensure days_completed exists
  const daysCompleted: number[] = Array.isArray(user.days_completed)
    ? [...user.days_completed]
    : Array(10).fill(0);

  // Flip the requested day
  daysCompleted[day - 1] = 1;

  const { data, error } = await supabase
    .from("users")
    .update({
      days: currentDays + 1, // ✅ increment
      days_completed: daysCompleted,
    })
    .eq("id", userId)
    .select()
    .single();

  if (error) throw error;

  return data;
}


 
 

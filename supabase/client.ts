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
  });

  if (profileError) {
    console.error('Profile creation error:', profileError);
    return profileError;
  }
}

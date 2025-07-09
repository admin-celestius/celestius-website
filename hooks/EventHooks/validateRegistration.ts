import supabase from "@/lib/supabase";

type RegistrationProp = {
  name: string;
  email: string;
  college: string;
  department: string;
  year: string;
  event: string;
};

const validateRegistration = async ({
  name,
  email,
  college,
  department,
  year,
  event,
}: RegistrationProp) => {
  const { data, error } = await supabase
    .from('registrations')
    .insert([
      {
        name,
        email,
        college,
        department,
        year,
        event,
      },
    ])
    .select(); 

  if (error) {
    console.error('Error inserting registration:', error.message);
    return { success: false, error };
  }

  console.log('Registration inserted:', data);
  return { success: true, data };
};

export default validateRegistration;

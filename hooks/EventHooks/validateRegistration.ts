import supabase from "@/lib/supabase";

type RegistrationProp = {
  name: string;
  email: string;
  register_number: string;
  department: string;
  year: string;
  section: string;
};

const validateRegistration = async ({
  name,
  email,
  register_number,
  department,
  year,
  section,
}: RegistrationProp) => {
  if (!email.endsWith("@citchennai.net")) {
    return {
      success: false,
      error: { message: "Email must end with @citchennai.net" },
    };
  }

  const { data: existing, error: fetchError } = await supabase
    .from("registrations")
    .select("*")
    .or(`email.eq.${email},register_number.eq.${register_number}`);

  if (fetchError) {
    console.error("Error checking duplicates:", fetchError.message);
    return { success: false, error: fetchError };
  }

  if (existing && existing.length > 0) {
    return {
      success: false,
      error: { message: "You have already registered." },
    };
  }

  // ✅ 3. Insert into table
  const { data, error } = await supabase
    .from("registrations")
    .insert([
      {
        name,
        email,
        register_number,
        department,
        year,
        section,
      },
    ])
    .select();

  if (error) {
    console.error("Error inserting registration:", error.message);
    return { success: false, error };
  }

  console.log("Registration inserted:", data);
  return { success: true, data };
};

export default validateRegistration;

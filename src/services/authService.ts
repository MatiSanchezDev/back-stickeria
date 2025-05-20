import { supabase } from "../config/supabaseClient";
import { Auth } from "../interfaces/auth.interface";

const loginUser = async (authUser: Auth) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: authUser.email,
    password: authUser.password,
  });

  if (error) throw new Error(error.message);

  return data;
};

export { loginUser };

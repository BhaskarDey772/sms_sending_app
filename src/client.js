import { createClient } from "@supabase/supabase-js";


export const supaBase = createClient(
    process.env.REACT_APP_CLIENT_URL,
    process.env.REACT_APP_CLIENT_SECRET ,
)

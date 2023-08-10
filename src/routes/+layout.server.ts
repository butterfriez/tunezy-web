// src/routes/+layout.server.ts
//@ts-nocheck
export const load = async ({ locals: { getSession } }) => {
    return {
      session: await getSession(),
    }
  }
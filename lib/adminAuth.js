import { NextResponse } from "next/server";

export const ADMIN_COOKIE_NAME = "bharat_admin_session";

export const ADMIN_SESSION_TOKEN =
  "bharat-admin-session-v1-authenticated";

const getAdminUsername = () => process.env.ADMIN_USERNAME || "";

const getAdminPassword = () => process.env.ADMIN_PASSWORD || "";

const cookieOptions = {
  httpOnly: true,
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: 60 * 60 * 12,
};

export const isValidAdminCredentials = (username, password) =>
  username === getAdminUsername() && password === getAdminPassword();

export const isAuthenticatedRequest = (request) =>
  request.cookies.get(ADMIN_COOKIE_NAME)?.value === ADMIN_SESSION_TOKEN;

export const unauthorizedJson = () =>
  NextResponse.json({ error: "Unauthorized." }, { status: 401 });

export const setAdminSession = (response) => {
  response.cookies.set(ADMIN_COOKIE_NAME, ADMIN_SESSION_TOKEN, cookieOptions);
  return response;
};

export const clearAdminSession = (response) => {
  response.cookies.set(ADMIN_COOKIE_NAME, "", {
    ...cookieOptions,
    maxAge: 0,
  });
  return response;
};

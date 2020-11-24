import { LoginEntity } from "../model/login";

// Just a fake loginAPI
export const isValidLogin = (loginInfo: LoginEntity): Promise<boolean> =>
  new Promise((resolve) => {
    setTimeout(() => {
      // mock call
        resolve(loginInfo.login.startsWith("a") && (loginInfo.password === "test" || loginInfo.password === "pass"));
    }, 500);
  });

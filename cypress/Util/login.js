import loginPage from "../support/Pages/loginPage"
import data from '../fixtures/dataFixture.json'

class LoginUtil {
    login(condition) {
        switch (condition) {
            case "valid_login":
                loginPage.login(data.userData.validUsername, data.userData.validPassword)
                break;
            case "invalid_login":
                loginPage.login(data.userData.invalidUsername, data.userData.validPassword)
                break;
            default: throw new Error(`The condition passed does not exist: ${condition}`);
        }
    }
}

export default new LoginUtil();
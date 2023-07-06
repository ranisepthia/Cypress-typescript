import { LoginPage } from "./pages/login_pages"
import { DashboardPage } from "./pages/dashboard_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
const URL = 'https://www.saucedemo.com/'

it('Successful Add Product to Cart', () => {
  loginPage.login(URL, 'problem_user', 'secret_sauce')
  loginPage.assertLogin()
  dashboardPage.addToCart()
})

  it('Test Remove Product', () => {
    loginPage.login(URL, 'problem_user', 'secret_sauce')
    loginPage.assertLogin()
    dashboardPage.removeCart()
})  
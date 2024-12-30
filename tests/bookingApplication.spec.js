const{test}=require('@playwright/test')
const {BookingPage}=require('../pageobject/bookingApplication.page');

// test.beforeEach("Avoid the Advertisement",async ({page}) => {
//     await page.url("https://www.booking.com/");
//     await page.route(() => {
//         const elements = document.querySelectorAll('[id*="google_ads_iframe_"], [class*="google_ads_iframe_"]');
//         elements.forEach(element => element.remove());
//     });
// }),
test("Booking Application Test Cases",async({page})=>{
    const bookingPage=new BookingPage(page)
    await bookingPage.lunchUrl();
    await bookingPage.verfyingPageTitleAndUrl();
    await bookingPage.searchForHotel();
    await bookingPage.filterTheSearchResult();
})
const{expect}=require('@playwright/test')
require('dotenv').config();

exports.BookingPage=class BookingPage{
    constructor(page){
        this.page=page;
        this.search=page.locator('//button//span[text()="Search"]')
        this.destination=page.locator('//div//input[@placeholder="Where are you going?"]')
        this.date=page.locator('//button//span[text()="Check-in Date"]')
        this.checkInDate=page.locator('//span[@class="cf06f772fa ef091eb985 e4862a187f a8b15b729e"]')
        this.checkOutDate=page.locator('(//span[text()="8"])[1]')
        this.exactDates=page.locator('//span[text()="7 days"]')
        this.selectTheGuest=page.locator('//span[@class="a8887b152e c7ce171153"]')
        this.selectTheAdultCount=page.locator('(//div[@class="bfb38641b0"]//button[@type="button"])[2]')
        this.doneContext=page.locator('//button//span[text()="Done"]')
        this.grid=page.locator('//label[text()="Grid"]')
        this.hotelClick=page.locator('(//div[text()="Hotels"])[1]')
    }

    async lunchUrl(){
        await this.page.goto(process.env.baseUrl)
    }
    async verfyingPageTitleAndUrl(){
        const title=await this.page.title();
        await expect(title).toContain("Booking");
        await expect(this.page).toHaveTitle("Booking.com | Official site | The best hotels, flights, car rentals & accommodations")
        await expect(this.page).toHaveURL(process.env.baseUrl)
    }
    async searchForHotel(){
        await this.destination.click();
        await this.destination.fill("Paris")
        await this.date.click();
        await this.checkInDate.click();
        await this.checkOutDate.click();
        await this.exactDates.click();
        await expect(this.exactDates).toBeVisible();
        await this.selectTheGuest.click();
        await this.selectTheAdultCount.click();
        await this.doneContext.click();
        await this.search.click();
        await this.page.waitForTimeout(5000)
    }
    async filterTheSearchResult(){
        await expect(this.grid).toBeVisible();
        await expect(this.hotelClick).not.toBeChecked();
        await this.hotelClick.click();
        await expect(this.hotelClick).toBeChecked();
    }
}
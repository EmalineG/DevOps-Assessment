
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


const express = require('express')
const path = require('path')
const app = express()
const {bots, playerRecord} = require('./data')
const {shuffleArray} = require('./utils')

app.use(express.json())

//middleware to serve files from public folder
app.use(express.static(path.join(__dirname, '/public')))

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Draw button shows up when page loads', async () => {
    const drawButt = await driver.findElement(By.id('see-all'))
    const displayed = await drawButt.isDisplayed()
    expect(displayed).toBe(true)
})

test('Bots appear when draw button clicked', async () => {
    //click draw button
    await driver.findElement(By.id('draw')).click()
    //wait for load
    await driver.sleep(500)

    //select choose header element
    const headerDiv = await driver.findElement(By.id('choose-header'))
    //set default to true
    let visible = true

    //check if choose header element is Displayed
    if(await headerDiv.isDisplayed() === false){
        //set to false if not 
        let visible = false
    }
//this is the test, should pass if visible
    expect(visible).toBe(true)
})

// kyle's
// test('Selecting a bot displays in new div', async () => { 
//     await driver.findElement(By.id('draw')).click()
//     await driver.sleep(300)
//     await driver.findElement(By.xpath('(//*[text()="Add to Duo"])[1]')).click()
//     const playerDuoDiv = await driver.findElement(By.id('player-duo'))
//     const displayed = await playerDuoDiv.isDisplayed()
//     expect(displayed).toBe(true)
// })
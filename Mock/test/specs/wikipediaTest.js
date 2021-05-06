describe("Wikipedia test", () => {
  it("Open Google", () => {
    return browser.url("https://www.google.com/");
  });

  it("Click search bar", () => {
    let selector = $(
      "body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input"
    );
    selector.click();
  });

  it("Search Wikipedia", () => {
    selector.addValue("Wikipedia");
    browser.keys("Enter");
  });
});

it("Click Wikipedia and verify", () => {
  let wikipedia = $(
    "#rso > div:nth-child(1) > div > div > div.yuRUbf > a > h3"
  );
  wikipedia.click();
  expect(browser).toHaveUrl("https://es.wikipedia.org/wiki/Wikipedia:Portada");
});

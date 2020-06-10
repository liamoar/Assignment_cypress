export function sidemenu(category) {
  const smallText = category.toLowerCase();

  //click sidenave menu button from homepage
  cy.get(".hm-icon").click().wait(2000);

  //getting list of li children

  cy.get(".hmenu").then((data) => {
    var lists = data[0].children;

    //lists get the li elements which is in typeof object
    //to covert object to array
    var aryyList = Object.values(lists);
    var result = [];

    //from the array of li elements finding the li elments with text
    //Also taking the array index for future use
    aryyList.forEach((item, index) => {
      if (item.textContent == category) {
        var a = { item: item, index: index };
        result.push(a);
      }
    });
    if (result.length > 0) {
      var index = result[0].index + 1;
      let xpath = `.hmenu-visible > :nth-child(${index}) > .hmenu-item`;
      cy.get(xpath).then((data) => {
        var a = data[0];
        a.click(function () {
          a.onmouseover();
        });
        cy.get(".hmenu-visible > :nth-child(2) > .hmenu-item").should(
          "contain",
          smallText
        );
      });
    } else {
      cy.log("no such category found");
    }
  });
}

/// <reference types="cypress" />

describe("Validate created car", () => {
    let sid;
    let createdCarId;
    before(() => {
        cy.readFile("cypress/fixtures/user_sid.json").then((file) => {
            sid = file.sid;
            cy.log("SID Cookie:", sid);
            if (!sid) {
                throw new Error("⚠️ Cookie 'sid' не знайдено у user_sid.json");
            }
        });
        cy.readFile("cypress/fixtures/response_last_car_created.json").then((savedResponse) => {
            createdCarId = savedResponse.data.id;
            cy.log("Created car ID:", createdCarId);
        });
    });

    it("Validate car details", () => {
        cy.request({
            method: "GET",
            url: "/api/cars",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
                Cookie: `sid=${sid}`,
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("User`s cars:", JSON.stringify(response.body));

            const createdCar = response.body.data.find((car) => car.id === createdCarId);
            cy.log("Created Car Details:", JSON.stringify(createdCar));
            expect(createdCar).to.not.be.undefined;
            expect(createdCar).to.have.property("brand", "BMW");
            expect(createdCar).to.have.property("model", "X5");
            expect(createdCar).to.have.property("mileage", 0);
        });
    });
});

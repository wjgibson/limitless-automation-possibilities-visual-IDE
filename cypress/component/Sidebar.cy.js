import Sidebar from "../../src/Elements/Sidebar";

describe("Sidebar.cy.js", () => {
  const description = "[aria-label=description]";
  const input = "[aria-label=input]";
  const sequence = "[aria-label=sequence]";
  const step = "[aria-label=step]";
  const controlModule = "[aria-label=controlModule]";
  const caste2 = "[aria-label=caste2]";
  const output = "[aria-label=output]";

  //Mounting test//
  it("Sidebar mounts correctly", () => {
    cy.mount(<Sidebar></Sidebar>);
  });

  //Testing for correct text//
  it("description has text", () => {
    cy.mount(<Sidebar></Sidebar>);

    cy.get(description).should(
      "have.text",
      "You can drag these nodes to the pane on the left."
    );
  });

  it("input node has text", () => {
    cy.mount(<Sidebar></Sidebar>);

    cy.get(input).should("have.text", "Input Node");
  });

  it("sequence node has text", () => {
    cy.mount(<Sidebar></Sidebar>);

    cy.get(sequence).should("have.text", "Sequence");
  });

  it("step node has text", () => {
    cy.mount(<Sidebar></Sidebar>);

    cy.get(step).should("have.text", "Step");
  });

  it("control module node has text", () => {
    cy.mount(<Sidebar></Sidebar>);

    cy.get(controlModule).should("have.text", "Control Module");
  });

  it("caste 2 node has text", () => {
    cy.mount(<Sidebar></Sidebar>);

    cy.get(caste2).should("have.text", "Caste 2 Sequence");
  });

  it("output node has text", () => {
    cy.mount(<Sidebar></Sidebar>);

    cy.get(output).should("have.text", "Output Node");
  });

  //Testing for onDragStart Event//
  it("input node draggable", () => {
    const onChangeSpy = cy.spy().as("onChangeSpy");
    cy.mount(<Sidebar onClick={onChangeSpy}></Sidebar>);

    cy.get(input)
      .trigger("mousedown", { button: 0 })
      .wait(1500)
      .trigger("mousemove", {
        clientX: 357.75,
        clientY: 682.25,
        screenX: 1811.75,
        screenY: 799.25,
        pageX: 682.25,
        pageY: 105.8125,
      })
      .trigger("mouseup", { force: true });
  });

  it("sequence node draggable", () => {
    const onChangeSpy = cy.spy().as("onChangeSpy");
    cy.mount(<Sidebar onClick={onChangeSpy}></Sidebar>);

    cy.get(sequence)
      .trigger("mousedown", { button: 0 })
      .wait(1500)
      .trigger("mousemove", {
        clientX: 357.75,
        clientY: 682.25,
        screenX: 1811.75,
        screenY: 799.25,
        pageX: 682.25,
        pageY: 105.8125,
      })
      .trigger("mouseup", { force: true });
  });

  it("step node draggable", () => {
    const onChangeSpy = cy.spy().as("onChangeSpy");
    cy.mount(<Sidebar onClick={onChangeSpy}></Sidebar>);

    cy.get(step)
      .trigger("mousedown", { button: 0 })
      .wait(1500)
      .trigger("mousemove", {
        clientX: 357.75,
        clientY: 682.25,
        screenX: 1811.75,
        screenY: 799.25,
        pageX: 682.25,
        pageY: 105.8125,
      })
      .trigger("mouseup", { force: true });
  });

  it("control module node draggable", () => {
    const onChangeSpy = cy.spy().as("onChangeSpy");
    cy.mount(<Sidebar onClick={onChangeSpy}></Sidebar>);

    cy.get(controlModule)
      .trigger("mousedown", { button: 0 })
      .wait(1500)
      .trigger("mousemove", {
        clientX: 357.75,
        clientY: 682.25,
        screenX: 1811.75,
        screenY: 799.25,
        pageX: 682.25,
        pageY: 105.8125,
      })
      .trigger("mouseup", { force: true });
  });

  it("caste 2 node draggable", () => {
    const onChangeSpy = cy.spy().as("onChangeSpy");
    cy.mount(<Sidebar onClick={onChangeSpy}></Sidebar>);

    cy.get(caste2)
      .trigger("mousedown", { button: 0 })
      .wait(1500)
      .trigger("mousemove", {
        clientX: 357.75,
        clientY: 682.25,
        screenX: 1811.75,
        screenY: 799.25,
        pageX: 682.25,
        pageY: 105.8125,
      })
      .trigger("mouseup", { force: true });
  });

  it("output node draggable", () => {
    const onChangeSpy = cy.spy().as("onChangeSpy");
    cy.mount(<Sidebar onClick={onChangeSpy}></Sidebar>);

    cy.get(output)
      .trigger("mousedown", { button: 0 })
      .wait(1500)
      .trigger("mousemove", {
        clientX: 357.75,
        clientY: 682.25,
        screenX: 1811.75,
        screenY: 799.25,
        pageX: 682.25,
        pageY: 105.8125,
      })
      .trigger("mouseup", { force: true });
  });
});
import { BenefitService } from "./benefitService";
import { getTestBed, inject, TestBed } from "@angular/core/testing";

describe("benefitService", () => {
  let injector: TestBed;
  let benefitService: BenefitService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BenefitService],
    }).compileComponents();

    injector = getTestBed();

    benefitService = injector.get(BenefitService);
  });

  it("should not discount employee benefit if employeeName does not begin with A", () => {
    let employeeName = "Ben";
    let benefitCost = benefitService.calculateBenefitCost(employeeName, []);

    expect(benefitCost).toBe(1000);
  });

  it("should discount employee benefit if employeeName begins with A", () => {
    let employeeName = "Adam";
    let benefitCost = benefitService.calculateBenefitCost(employeeName, []);

    expect(benefitCost).toBe(900);
  });

  it("should discount employee benefit appropriately if employee does not have a name that starts with A, but has dependents whose names begin with A", () => {
    let employeeName = "Ben";
    let dependentNames = ["Andrea", "Amanda"];
    let benefitCost = benefitService.calculateBenefitCost(
      employeeName,
      dependentNames
    );

    expect(benefitCost).toBe(1900);
  });

  it("should discount employee benefit appropriately if employee does have a name that starts with A, but has dependents names do not start with A", () => {
    let employeeName = "Adam";
    let dependentNames = ["Sally", "Ryan", "Tom", "Tim"];
    let benefitCost = benefitService.calculateBenefitCost(
      employeeName,
      dependentNames
    );

    expect(benefitCost).toBe(2900);
  });
});

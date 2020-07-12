import { Injectable } from "@angular/core";

@Injectable()
export class BenefitService {
  employeeBenefitCost: number = 1000;
  dependentBenefitCost: number = 500;

  beginsWithADiscount = 0.9;

  constructor() {}

  public calculateBenefitCost(
    employeeName: string,
    dependentNames: Array<string>
  ) {
    let totalBenefitCost: number = 0;

    if (this.nameBeginsWithA(employeeName))
      totalBenefitCost += this.employeeBenefitCost * this.beginsWithADiscount;
    else totalBenefitCost += this.employeeBenefitCost;

    dependentNames.forEach((dependentName: string) => {
      if (this.nameBeginsWithA(dependentName))
        totalBenefitCost +=
          this.dependentBenefitCost * this.beginsWithADiscount;
      else totalBenefitCost += this.dependentBenefitCost;
    });

    return totalBenefitCost;
  }

  private nameBeginsWithA(name: string) {
    return name.toLowerCase().startsWith("a");
  }
}

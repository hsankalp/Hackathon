export const properties = {
  baseUrl: "http://localhost:8080/api/v1/updateswagger",
  region: [
    {
      name: "North America",
      value: "US",
      key: 0
    },
    {
      name: "China",
      value: "CN",
      key: 1
    }
  ],
  environments: [
    {
      name: "QA",
      key: 0
    },
    {
      name: "Perf",
      key: 1
    },
    {
      name: "Stage",
      key: 2
    },
    {
      name: "Prod",
      key: 3
    }
  ],
  applications: [
    "Order-Manager-B2B",
    "Offer-Manager-B2B",
    "Provisioning",
    "Subscription-Services",
    "Account-Manager-B2B",
    "Subscription-Orchestration-B2B",
    "Report-Manager"
  ]
};

export const properties = {
  baseUrl: "",
  region: [
    {
      name: "North America",
      key: 0
    },
    {
      name: "China",
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

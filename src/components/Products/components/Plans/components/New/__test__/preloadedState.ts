export const preloadedState = {
  steps: {
    currentStep: 0,
    steps: [
      { title: 'Products', completed: false, active: true },
      { title: 'Summary', completed: false, active: false },
    ],
  },
  plans: {
    selectedPlanName: '',
    selectedServices: [],
    services: [
      {
        title: 'Test plan',
        selected: false,
        seats: { value: 0, accessor: 'test' },
        value: 'test',
        packageOptions: {
          selectedOption: {
            title: 'DNS Essentials',
            value: 'dnsEssentials',
            accessor: 'test',
            type: 'packageOptions',
          },
          options: [
            {
              title: 'DNS Essentials',
              value: 'dnsEssentials',
              accessor: 'test',
              type: 'packageOptions',
            },
            {
              title: 'DNS Advantage',
              value: 'dnsAdvantage',
              accessor: 'test',
              type: 'packageOptions',
            },
            {
              title: 'SIG Essentials',
              value: 'sigEssentials',
              accessor: 'test',
              type: 'packageOptions',
            },
            {
              title: 'SIG Advantage',
              value: 'sigAdvantage',
              accessor: 'test',
              type: 'packageOptions',
            },
          ],
        },
        policies: {
          selectedOption: {
            title: 'Default Policy',
            value: 'defaultPolicy',
            accessor: 'test',
            type: 'policies',
          },
          options: [
            {
              title: 'Default Policy',
              value: 'dnsEssentials',
              accessor: 'test',
              type: 'policies',
            },
            {
              title: 'Default Policy 1',
              value: 'sigEssentials',
              accessor: 'test',
              type: 'policies',
            },
          ],
        },
      },
    ],
  },
}

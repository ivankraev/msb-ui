import { PlansSliceState } from './plansSlice'

export const initialState: PlansSliceState = {
  selectedPlan: { title: 'Small Business Standard', value: 'smallBusinessStandard' },
  selectedServices: [],
  plans: [
    { title: 'All inclusive', value: 'allInclusive' },
    { title: 'Basic', value: 'basic' },
    { title: 'Essentials', value: 'essentials' },
    { title: 'Advanced', value: 'advanced' },
    { title: 'Small Business Standard', value: 'smallBusinessStandard' },
  ],
  services: [
    {
      title: 'Umbrella',
      selected: false,
      seats: '20',
      value: 'umbrella',
      packageOptions: {
        selectedOption: {
          title: 'DNS Essentials',
          value: 'dnsEssentials',
          accessor: 'umbrella',
          type: 'packageOptions',
        },
        options: [
          {
            title: 'DNS Essentials',
            value: 'dnsEssentials',
            accessor: 'umbrella',
            type: 'packageOptions',
          },
          {
            title: 'DNS Advantage',
            value: 'dnsAdvantage',
            accessor: 'umbrella',
            type: 'packageOptions',
          },
          {
            title: 'SIG Essentials',
            value: 'sigEssentials',
            accessor: 'umbrella',
            type: 'packageOptions',
          },
          {
            title: 'SIG Advantage',
            value: 'sigAdvantage',
            accessor: 'umbrella',
            type: 'packageOptions',
          },
        ],
      },
      policies: {
        selectedOption: {
          title: 'Default Policy',
          value: 'defaultPolicy',
          accessor: 'umbrella',
          type: 'policies',
        },
        options: [
          {
            title: 'Default Policy',
            value: 'dnsEssentials',
            accessor: 'umbrella',
            type: 'policies',
          },
          {
            title: 'Default Policy 1',
            value: 'sigEssentials',
            accessor: 'umbrella',
            type: 'policies',
          },
        ],
      },
    },
    {
      title: 'Secure Endpoint',
      selected: false,
      seats: '20',
      value: 'secureEndpoint',
      packageOptions: {
        selectedOption: {
          title: 'DNS Essentials',
          value: 'dnsEssentials',
          accessor: 'secureEndpoint',
          type: 'packageOptions',
        },
        options: [
          {
            title: 'DNS Essentials',
            value: 'dnsEssentials',
            accessor: 'secureEndpoint',
            type: 'packageOptions',
          },
          {
            title: 'DNS Advantage',
            value: 'dnsAdvantage',
            accessor: 'secureEndpoint',
            type: 'packageOptions',
          },
          {
            title: 'SIG Essentials',
            value: 'sigEssentials',
            accessor: 'secureEndpoint',
            type: 'packageOptions',
          },
          {
            title: 'SIG Advantage',
            value: 'sigAdvantage',
            accessor: 'secureEndpoint',
            type: 'packageOptions',
          },
        ],
      },
      policies: {
        selectedOption: {
          title: 'Default Policy',
          value: 'defaultPolicy',
          accessor: 'secureEndpoint',
          type: 'policies',
        },
        options: [
          {
            title: 'Default Policy',
            value: 'defaultPolicy',
            accessor: 'secureEndpoint',
            type: 'policies',
          },
          {
            title: 'Default Policy 1',
            value: 'defaultPolicy1',
            accessor: 'secureEndpoint',
            type: 'policies',
          },
        ],
      },
    },
    {
      title: 'DUO',
      selected: false,
      seats: '20',
      value: 'duo',
      packageOptions: {
        selectedOption: {
          title: 'DNS Essentials',
          value: 'dnsEssentials',
          accessor: 'duo',
          type: 'packageOptions',
        },
        options: [
          {
            title: 'DNS Essentials',
            value: 'dnsEssentials',
            accessor: 'duo',
            type: 'packageOptions',
          },
          {
            title: 'DNS Advantage',
            value: 'dnsAdvantage',
            accessor: 'duo',
            type: 'packageOptions',
          },
          {
            title: 'SIG Essentials',
            value: 'sigEssentials',
            accessor: 'duo',
            type: 'packageOptions',
          },
          {
            title: 'SIG Advantage',
            value: 'sigAdvantage',
            accessor: 'duo',
            type: 'packageOptions',
          },
        ],
      },
      policies: {
        selectedOption: {
          title: 'Default Policy',
          value: 'defaultPolicy',
          accessor: 'duo',
          type: 'policies',
        },
        options: [
          {
            title: 'Default Policy',
            value: 'dnsEssentials',
            accessor: 'duo',
            type: 'policies',
          },
          {
            title: 'Default Policy 1',
            value: 'sigEssentials',
            accessor: 'duo',
            type: 'policies',
          },
        ],
      },
    },
    {
      title: 'Cloud Mailbox Defense',
      selected: false,
      seats: '20',
      value: 'cmd',
      packageOptions: {
        selectedOption: {
          title: 'DNS Essentials',
          value: 'dnsEssentials',
          accessor: 'cmd',
          type: 'packageOptions',
        },
        options: [
          {
            title: 'DNS Essentials',
            value: 'dnsEssentials',
            accessor: 'cmd',
            type: 'packageOptions',
          },
          {
            title: 'DNS Advantage',
            value: 'dnsAdvantage',
            accessor: 'cmd',
            type: 'packageOptions',
          },
          {
            title: 'SIG Essentials',
            value: 'sigEssentials',
            accessor: 'cmd',
            type: 'packageOptions',
          },
          {
            title: 'SIG Advantage',
            value: 'sigAdvantage',
            accessor: 'cmd',
            type: 'packageOptions',
          },
        ],
      },
      policies: {
        selectedOption: {
          title: 'Default Policy',
          value: 'defaultPolicy',
          accessor: 'cmd',
          type: 'policies',
        },
        options: [
          {
            title: 'Default Policy',
            value: 'dnsEssentials',
            accessor: 'cmd',
            type: 'policies',
          },
          {
            title: 'Default Policy 1',
            value: 'sigEssentials',
            accessor: 'cmd',
            type: 'policies',
          },
        ],
      },
    },
    {
      title: 'SecureX',
      selected: false,
      seats: '20',
      value: 'secureX',
      packageOptions: {
        selectedOption: {
          title: 'DNS Essentials',
          value: 'dnsEssentials',
          accessor: 'secureX',
          type: 'packageOptions',
        },
        options: [
          {
            title: 'DNS Essentials',
            value: 'dnsEssentials',
            accessor: 'secureX',
            type: 'packageOptions',
          },
          {
            title: 'DNS Advantage',
            value: 'dnsAdvantage',
            accessor: 'secureX',
            type: 'packageOptions',
          },
          {
            title: 'SIG Essentials',
            value: 'sigEssentials',
            accessor: 'secureX',
            type: 'packageOptions',
          },
          {
            title: 'SIG Advantage',
            value: 'sigAdvantage',
            accessor: 'secureX',
            type: 'packageOptions',
          },
        ],
      },
      policies: {
        selectedOption: {
          title: 'Default Policy',
          value: 'defaultPolicy',
          accessor: 'secureX',
          type: 'policies',
        },
        options: [
          {
            title: 'Default Policy',
            value: 'dnsEssentials',
            accessor: 'secureX',
            type: 'policies',
          },
          {
            title: 'Default Policy 1',
            value: 'sigEssentials',
            accessor: 'secureX',
            type: 'policies',
          },
        ],
      },
    },
  ],
}

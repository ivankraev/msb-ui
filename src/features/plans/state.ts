import { PlansSliceState } from './plansSlice'

export const initialState: PlansSliceState = {
  error: true,
  selectedPlanName: { value: '' },
  selectedServices: [],
  services: [
    {
      title: 'Umbrella',
      selected: false,
      seats: { value: 0, accessor: 'umbrella' },
      value: 'umbrella',
      packages: {
        selectedOption: {
          title: 'DNS Essentials',
          value: 'dnsEssentials',
          accessor: 'umbrella',
          type: 'packages',
        },
        options: [
          {
            title: 'DNS Essentials',
            value: 'dnsEssentials',
            accessor: 'umbrella',
            type: 'packages',
          },
          {
            title: 'DNS Advantage',
            value: 'dnsAdvantage',
            accessor: 'umbrella',
            type: 'packages',
          },
          {
            title: 'SIG Essentials',
            value: 'sigEssentials',
            accessor: 'umbrella',
            type: 'packages',
          },
          {
            title: 'SIG Advantage',
            value: 'sigAdvantage',
            accessor: 'umbrella',
            type: 'packages',
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
      seats: { value: 0, accessor: 'secureEndpoint' },
      value: 'secureEndpoint',
      packages: {
        selectedOption: {
          title: 'DNS Essentials',
          value: 'dnsEssentials',
          accessor: 'secureEndpoint',
          type: 'packages',
        },
        options: [
          {
            title: 'DNS Essentials',
            value: 'dnsEssentials',
            accessor: 'secureEndpoint',
            type: 'packages',
          },
          {
            title: 'DNS Advantage',
            value: 'dnsAdvantage',
            accessor: 'secureEndpoint',
            type: 'packages',
          },
          {
            title: 'SIG Essentials',
            value: 'sigEssentials',
            accessor: 'secureEndpoint',
            type: 'packages',
          },
          {
            title: 'SIG Advantage',
            value: 'sigAdvantage',
            accessor: 'secureEndpoint',
            type: 'packages',
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
      seats: { value: 0, accessor: 'duo' },
      value: 'duo',
      packages: {
        selectedOption: {
          title: 'DNS Essentials',
          value: 'dnsEssentials',
          accessor: 'duo',
          type: 'packages',
        },
        options: [
          {
            title: 'DNS Essentials',
            value: 'dnsEssentials',
            accessor: 'duo',
            type: 'packages',
          },
          {
            title: 'DNS Advantage',
            value: 'dnsAdvantage',
            accessor: 'duo',
            type: 'packages',
          },
          {
            title: 'SIG Essentials',
            value: 'sigEssentials',
            accessor: 'duo',
            type: 'packages',
          },
          {
            title: 'SIG Advantage',
            value: 'sigAdvantage',
            accessor: 'duo',
            type: 'packages',
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
      seats: { value: 0, accessor: 'cmd' },
      value: 'cmd',
      packages: {
        selectedOption: {
          title: 'DNS Essentials',
          value: 'dnsEssentials',
          accessor: 'cmd',
          type: 'packages',
        },
        options: [
          {
            title: 'DNS Essentials',
            value: 'dnsEssentials',
            accessor: 'cmd',
            type: 'packages',
          },
          {
            title: 'DNS Advantage',
            value: 'dnsAdvantage',
            accessor: 'cmd',
            type: 'packages',
          },
          {
            title: 'SIG Essentials',
            value: 'sigEssentials',
            accessor: 'cmd',
            type: 'packages',
          },
          {
            title: 'SIG Advantage',
            value: 'sigAdvantage',
            accessor: 'cmd',
            type: 'packages',
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
      seats: { value: 0, accessor: 'secureX' },
      value: 'secureX',
      packages: {
        selectedOption: {
          title: 'DNS Essentials',
          value: 'dnsEssentials',
          accessor: 'secureX',
          type: 'packages',
        },
        options: [
          {
            title: 'DNS Essentials',
            value: 'dnsEssentials',
            accessor: 'secureX',
            type: 'packages',
          },
          {
            title: 'DNS Advantage',
            value: 'dnsAdvantage',
            accessor: 'secureX',
            type: 'packages',
          },
          {
            title: 'SIG Essentials',
            value: 'sigEssentials',
            accessor: 'secureX',
            type: 'packages',
          },
          {
            title: 'SIG Advantage',
            value: 'sigAdvantage',
            accessor: 'secureX',
            type: 'packages',
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

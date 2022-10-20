import languages from './languages.json'
import timezones from './timezones.json'

export const ProfileInfoFields = [
  { name: 'name', type: 'text', label: 'Name', required: true },
  { name: 'email', type: 'email', label: 'Email', required: true },
  { name: 'phone', type: 'tel', label: 'Phone' },
]

export const PreferencesFields = [
  { name: 'timezone', type: 'select', label: 'Time zone', required: true, options: timezones }, // TODO: decide timezone data format
  { name: 'language', type: 'select', label: 'Language', required: true, options: languages },
]

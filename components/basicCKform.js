import ConvertKitForm from 'convertkit-react'

const MY_FORM_ID = 2780208

function CKForm() {
  return (
    <ConvertKitForm template="cocoa" borderRadius={10} formId={MY_FORM_ID} />

  )
}
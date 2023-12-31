// handle local notifications for web
//. eventually integrate with gluestack's notification api, which only handles android and ios

// returns t/f
export async function checkPermissions() {
  // permission is 'prompt' | 'prompt-with-rationale' | 'granted' | 'denied' | 'default'
  const permission = Notification.permission
  console.log("permission", permission)
  switch (permission) {
    case "granted":
      return true
    case "prompt":
      return await handlePrompt()
    case "prompt-with-rationale":
      return await handlePromptWithRationale()
    default:
      return await handlePrompt()
  }
}

async function handlePrompt() {
  const status = await Notification.requestPermission()
  return status === "granted"
}

async function handlePromptWithRationale() {
  // show a dialog to the user asking them to allow notifications
  // then call Notification.requestPermission()
  alert("prompt-with-rationale")
  return false
}

// create a new web Notification, using a new browser API -
// sends a notification to the OS.
// obj has { title, options: { body, icon } }
export function createNotification(obj) {
  console.log("createNotification", obj)
  const notification = new Notification(obj.title, obj.options)
  notification.onshow = () => {
    console.log("notification shown")
  }
  notification.onclick = () => {
    console.log("notification clicked")
  }
  notification.onclose = () => {
    console.log("notification closed")
  }
}

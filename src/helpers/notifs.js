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

export function createNotification() {
  console.log("createNotification")
  const title = "Psyche reminder"
  const body = `Take a mindful pause. Be an observer of your thoughts and feelings.`
  const img = require("../assets/icons/icon.png")
  const options = {
    body,
    icon: img
  }
  console.log("new Notification", title, options)
  const notification = new Notification(title, options)
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

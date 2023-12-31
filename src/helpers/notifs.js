// returns t/f
export async function checkPermissions() {
  // display is 'prompt' | 'prompt-with-rationale' | 'granted' | 'denied'
  // const permissionStatus = await plugin.checkPermissions()
  // switch (permissionStatus.display) {
  const status = Notification.permission
  console.log("permission", status)
  switch (status) {
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
  // then call LocalNotifications.requestPermissions()
  alert("prompt-with-rationale")
  return false
}

export function createNotification() {
  console.log("createNotification")
  const title = "Psyche reminder"
  // const now = new Date().toISOString()
  const body = `Take a mindful pause. Be an observer of your thoughts and feelings.`
  // const img = "/icon.png"
  const options = {
    body
    // icon: img,
    // image: img
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

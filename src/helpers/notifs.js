// handle local notifications for web

//. integrate with gluestack's notification api,
// which currently only handles android and ios.

//. add types

// returns t/f
export async function checkPermissions() {
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
  // then call requestPermission()
  alert("prompt-with-rationale")
  return false
}

// returns a timerId if scheduled, or undefined
export function scheduleNotification(obj) {
  console.log("scheduleNotification", obj)

  const { schedule } = obj

  // handle a recurring notification
  // every is a string like "day"
  if (schedule.every) return handleEvery(obj)

  // handle a one-time notification
  // if (schedule.at) return handleAt(obj)

  // else create a notification now
  createNotification(obj)
}

// returns a timerId
function handleEvery(obj) {
  console.log("handleEvery", obj)
  const { every } = obj.schedule
  const timeUnits = {
    second: 1,
    minute: 60,
    hour: 3600,
    day: 86400,
    week: 604800,
    month: 2592000,
    quarter: 7776000,
    year: 31536000
  }
  const seconds = timeUnits[every]
  if (!seconds) throw new Error(`invalid time unit ${every}`)
  console.log(`scheduling notification every ${seconds} seconds`)

  //. need to tie this into react lifecycle - ie save timerid so can clear it on unmount.
  //. check if timer already running - if so, clear it first
  //. move this inside render fn? so can access ref?
  console.log("starting timer")
  const timerId = window.setInterval(createNotification, seconds * 1000, obj)
  return timerId
}

// create a new web Notification, using the browser API -
// sends a notification to the OS.
// obj has { title, options: { body, icon }, ... }
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
    // notification.close()
  }
  return notification
}

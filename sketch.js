function setup() {
  createCanvas(180, 170);
}

function draw() {
  background('lightblue');
  
  let bodyColor = "#FF97CE";
  let eyeColor = "#ffff";
  let pupilColor = "#000";
  let mouthColor = "#ff9797";

  let x = 50
  let y = 50
  let bodyWidth = 70
  let bodyHeight = 50

  // Eye dimensions
  let eyeWidth = 14
  let eyeHeight = 10
  
  // Pupil dimensions
  let pupilWidth = 6
  let pupilHeight = 6

  // Mouth dimensions
  let mouthWidth = 14
  let mouthHeight = 5

  // Handles dimensions
  let handleWidth = 15
  let handleHeight = 5

  // Main rectangle (body)
  fill(bodyColor);
  rect(x, y, bodyWidth, bodyHeight)

  // Top handle
  rect(x + bodyWidth, y + 10, handleWidth, handleHeight)

  // Side handle
  rect(x + bodyWidth + handleWidth - 5, y + 10, 5, 30)

  // Bottom handle
  rect(x + bodyWidth, y + bodyHeight - 15, handleWidth - 5, handleHeight)

  // Left eye
  fill(eyeColor);
  rect(x + 14, y + 10, eyeWidth, eyeHeight)

  // Right eye
  rect(x + 42, y + 10, eyeWidth, eyeHeight)

  // Mouth
  fill(mouthColor)
  rect(x + 28, y + 30, mouthWidth, mouthHeight)

  // Left pupil
  fill(pupilColor)
  rect(x + 18, y + 12, pupilWidth, pupilHeight)

  // Right pupil
  rect(x + 46, y + 12, pupilWidth, pupilHeight)
}
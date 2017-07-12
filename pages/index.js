
// This snippet breaks the build

for (let i = 0; i < 1; i++) {
  const g = () => {}
  const b = () => g()
  i = 2
}

// This works

let i

for (i = 0; i < 1; i++) {
  const g = () => {}
  const b = () => g()
  i = 2
}

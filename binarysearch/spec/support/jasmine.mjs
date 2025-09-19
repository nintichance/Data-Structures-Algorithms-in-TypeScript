export default {
  spec_dir: "build",
  spec_files: [
    "**/*[sS]pec.?(m)ts"
  ],
  helpers: [
    "helpers/**/*.?(m)js"
  ],
  env: {
    stopSpecOnExpectationFailure: false,
    random: true,
    forbidDuplicateNames: true
  }
}

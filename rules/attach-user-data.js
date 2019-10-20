function attachUserData(user, context, callback) {
  context.idToken.profile = user
  callback(null, user, context)
}

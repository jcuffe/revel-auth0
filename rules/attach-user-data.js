function attachUserData(user, context, callback) {
  const { zipLookup } = configuration
  user.user_metadata.region = zipLookup[user.user_metadata.zip]
  context.idToken.profile = user
  callback(null, user, context)
}

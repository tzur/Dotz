createServiceConfiguration = (service,clientId,secret)->
  ServiceConfiguration.configurations.remove(
    service: service
  )

  config =
    generic:
      service: service
      clientId: clientId
      secret: secret
    facebook:
      service: service
      appId: clientId
      secret: secret
    twitter:
      service: service
      consumerKey: clientId
      secret: secret

  switch service
    when 'facebook' then ServiceConfiguration.configurations.insert(config.facebook)
    when 'twitter' then ServiceConfiguration.configurations.insert(config.twitter)
    else ServiceConfiguration.configurations.insert(config.generic)


#PRODUCTION MODE:
createServiceConfiguration('facebook', '904084409705076', 'ed2840e1d563040cb0120317808e6524')

#DEVELOPMENT MODE:
#createServiceConfiguration('facebook', '554866124661986', '7f5f4623bf587798b18740174ee3d765')

createServiceConfiguration('github', 'Insert your clientId here.', 'Insert your secret here.')
createServiceConfiguration('google', 'Insert your clientId here.', 'Insert your secret here.')
createServiceConfiguration('twitter', 'Insert your consumerKey here.', 'Insert your secret here.')

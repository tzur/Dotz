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


createServiceConfiguration('facebook', '937922069633455', '603a8b65656b6b0306f2219aad2b72df')
createServiceConfiguration('github', 'Insert your clientId here.', 'Insert your secret here.')
createServiceConfiguration('google', 'Insert your clientId here.', 'Insert your secret here.')
createServiceConfiguration('twitter', 'Insert your consumerKey here.', 'Insert your secret here.')

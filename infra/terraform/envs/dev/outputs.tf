output "app_ipv4" {
  value = module.app.ipv4_address
}

output "stateful_ipv4" {
  value = module.stateful.ipv4_address
}

output "spaces_bucket" {
  value = module.spaces.bucket_name
}

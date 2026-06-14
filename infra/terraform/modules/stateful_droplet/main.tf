resource "digitalocean_droplet" "this" {
  name     = "${var.app_name}-stateful"
  region   = var.region
  size     = var.size
  image    = "docker-20-04"
  ssh_keys = var.ssh_keys
  user_data = var.user_data
}

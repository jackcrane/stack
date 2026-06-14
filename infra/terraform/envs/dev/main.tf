terraform {
  required_version = ">= 1.8.0"

  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.40"
    }
  }
}

provider "digitalocean" {
  token = var.do_token
}

module "spaces" {
  source = "../../modules/spaces"

  bucket_name = var.spaces_bucket
  region      = var.region
}

module "stateful" {
  source = "../../modules/stateful_droplet"

  app_name   = var.app_name
  region     = var.region
  size       = var.stateful_size
  ssh_keys   = var.ssh_keys
  user_data  = file("${path.module}/stateful-cloud-init.yaml")
}

module "app" {
  source = "../../modules/app_droplet"

  app_name   = var.app_name
  region     = var.region
  size       = var.app_size
  ssh_keys   = var.ssh_keys
  user_data  = templatefile("${path.module}/app-cloud-init.yaml", {
    dockerhub_username = var.dockerhub_username
    image_tag          = var.image_tag
  })
}

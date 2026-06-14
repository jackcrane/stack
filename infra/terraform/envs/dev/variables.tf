variable "do_token" {
  type      = string
  sensitive = true
}

variable "app_name" {
  type    = string
  default = "stack-template"
}

variable "region" {
  type    = string
  default = "nyc3"
}

variable "app_size" {
  type    = string
  default = "s-2vcpu-2gb"
}

variable "stateful_size" {
  type    = string
  default = "s-2vcpu-4gb"
}

variable "ssh_keys" {
  type = list(string)
}

variable "dockerhub_username" {
  type = string
}

variable "image_tag" {
  type    = string
  default = "latest"
}

variable "spaces_bucket" {
  type = string
}

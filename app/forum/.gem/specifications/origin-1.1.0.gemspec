# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "origin"
  s.version = "1.1.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 1.3.6") if s.respond_to? :required_rubygems_version=
  s.authors = ["Durran Jordan"]
  s.date = "2013-04-25"
  s.description = "Origin is a simple DSL for generating MongoDB selectors and options"
  s.email = ["durran@gmail.com"]
  s.homepage = "http://mongoid.org"
  s.require_paths = ["lib"]
  s.rubyforge_project = "origin"
  s.rubygems_version = "1.8.23"
  s.summary = "Simple DSL for MongoDB query generation"

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
    else
    end
  else
  end
end

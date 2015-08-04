# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "guard-unicorn"
  s.version = "0.0.7"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Andrei Maxim"]
  s.date = "2012-06-11"
  s.description = "Guard plug-in that allows you to restart Unicorn"
  s.email = ["andrei@andreimaxim.ro"]
  s.homepage = "https://github.com/xhr/guard-unicorn"
  s.require_paths = ["lib"]
  s.rubyforge_project = "guard-unicorn"
  s.rubygems_version = "1.8.23"
  s.summary = "Guard for Unicorn"

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<guard>, [">= 1.1"])
      s.add_development_dependency(%q<rake>, [">= 0"])
      s.add_development_dependency(%q<bundler>, [">= 0"])
      s.add_development_dependency(%q<minitest>, [">= 0"])
      s.add_development_dependency(%q<guard>, [">= 0"])
    else
      s.add_dependency(%q<guard>, [">= 1.1"])
      s.add_dependency(%q<rake>, [">= 0"])
      s.add_dependency(%q<bundler>, [">= 0"])
      s.add_dependency(%q<minitest>, [">= 0"])
      s.add_dependency(%q<guard>, [">= 0"])
    end
  else
    s.add_dependency(%q<guard>, [">= 1.1"])
    s.add_dependency(%q<rake>, [">= 0"])
    s.add_dependency(%q<bundler>, [">= 0"])
    s.add_dependency(%q<minitest>, [">= 0"])
    s.add_dependency(%q<guard>, [">= 0"])
  end
end

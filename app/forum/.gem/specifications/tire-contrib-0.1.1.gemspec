# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "tire-contrib"
  s.version = "0.1.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Karel Minarik", "Oliver Eilhard"]
  s.date = "2012-05-06"
  s.email = ["karmi@karmi.cz", "oliver.eilhard@gmail.com"]
  s.extra_rdoc_files = ["README.markdown", "MIT-LICENSE"]
  s.files = ["README.markdown", "MIT-LICENSE"]
  s.homepage = ""
  s.rdoc_options = ["--charset=UTF-8"]
  s.require_paths = ["lib"]
  s.rubyforge_project = "tire-contrib"
  s.rubygems_version = "1.8.23"
  s.summary = "Contributions and additions for the Tire gem"

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<tire>, [">= 0"])
      s.add_development_dependency(%q<bundler>, ["~> 1.1.0"])
      s.add_development_dependency(%q<turn>, [">= 0"])
      s.add_development_dependency(%q<shoulda>, [">= 0"])
      s.add_development_dependency(%q<mocha>, [">= 0"])
      s.add_development_dependency(%q<activerecord>, [">= 0"])
      s.add_development_dependency(%q<activesupport>, [">= 0"])
      s.add_development_dependency(%q<sqlite3>, [">= 0"])
    else
      s.add_dependency(%q<tire>, [">= 0"])
      s.add_dependency(%q<bundler>, ["~> 1.1.0"])
      s.add_dependency(%q<turn>, [">= 0"])
      s.add_dependency(%q<shoulda>, [">= 0"])
      s.add_dependency(%q<mocha>, [">= 0"])
      s.add_dependency(%q<activerecord>, [">= 0"])
      s.add_dependency(%q<activesupport>, [">= 0"])
      s.add_dependency(%q<sqlite3>, [">= 0"])
    end
  else
    s.add_dependency(%q<tire>, [">= 0"])
    s.add_dependency(%q<bundler>, ["~> 1.1.0"])
    s.add_dependency(%q<turn>, [">= 0"])
    s.add_dependency(%q<shoulda>, [">= 0"])
    s.add_dependency(%q<mocha>, [">= 0"])
    s.add_dependency(%q<activerecord>, [">= 0"])
    s.add_dependency(%q<activesupport>, [">= 0"])
    s.add_dependency(%q<sqlite3>, [">= 0"])
  end
end

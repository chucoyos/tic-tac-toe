class GamesController < ApplicationController
  def index
    render component: 'Game'
  end
end

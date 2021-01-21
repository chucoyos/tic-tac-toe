class ClientsController < ApplicationController
    def index
      @clients = Client.all
      render component: 'Clients', props: { clients: @clients }
    end
end

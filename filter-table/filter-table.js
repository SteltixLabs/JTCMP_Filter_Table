define(['knockout'], 
    function(ko) {
        function model(context) {
                var self = this;
                
                self.filteredTable = ko.observableArray();
                self.filterBy = ko.observable("");

                self.filterTable = ko.computed(function() {
                    var filter = self.filterBy();
                    self.filteredTable.removeAll();
                    
                    for (var i in self.rows) { //TODO: -implement a way to optionally make the search case-insensitive
                        for (var j in self.rows[i]) {
                            if (self.rows[i][j].indexOf(filter) > -1) { //if the cell contains the search term as a substring
                                self.filteredTable.push(self.rows[i]);
                                break; //so the same row isn't pushed to the filteredTable multiple times
                            }
                        }
                    }
                });

                context.props.then(function(properties) {
                    if (properties.rows) {
                        self.rows = properties.rows;
                        for (var i in self.rows) { //populate the filteredTable initially
                            self.filteredTable.push(self.rows[i]);
                        }
                        self.filterBy(properties.filter);
                        self.header = properties.header;

                    }
                });
                

        }
    return model;
});

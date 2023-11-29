const Visitor = require('../model/visitorModel')

function submitData(data){
    const newVisitor = new Visitor({
        visitors_name: data.visitors_name,
        visitors_mobile: data.visitors_mobile,
        visitors_address: data.visitors_address,
        drinks_snacks: data.drinks_snacks,
        came_to_meet: data.came_to_meet,
        reason_for_visit: data.reason_for_visit,
    });
    
    newVisitor.save();
}

module.exports = submitData;
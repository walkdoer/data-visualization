Layout
=============================


### Layout.force

#### Charge
Charge is a force that a node can exhibit where it can either attract (positive values) or repel (negative values) . Varying this value in conjunction with other forces (such as gravity) or a link (on a node by node basis) is generally necessary to maintain stability.

#### Gravity
The gravity force isn't actually a true representation of gravitational attraction (this can be more closely approximated using positive values of charge). Instead it approximates the action of a spring connected to a node. This has a more pleasant visual effect when the affected node is closer to it's 'great attractor' and avoids what would otherwise be a small black hole type effect.

####Friction
The frictional force is one designed to act on the movement of a node to reduce it's speed over time. It isn't implemented as true friction (in the physical sense) and should be thought of as a 'velocity decay' in the truer sense.

Mike makes the point in the 2011 talk at Trulia that when using gravity in a force layout diagram, it is useful to include a degree of charge repulsion to provide stability. This can be demonstrated by experimenting with varying values of the charges in a diagram and observing the effects.

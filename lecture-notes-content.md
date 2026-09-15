<div class="tabs">
<button class="tab-btn active" onclick="showTab('sem1', this)">1st Semester</button>
<button class="tab-btn" onclick="showTab('sem2', this)">2nd Semester</button>
<button class="tab-btn" onclick="showTab('sem3', this)">3rd Semester</button>
<button class="tab-btn" onclick="showTab('sem4', this)">4th Semester</button>
<button class="tab-btn" onclick="showTab('sem5', this)">5th Semester</button>
<button class="tab-btn" onclick="showTab('sem6', this)">6th Semester</button>
<button class="tab-btn" onclick="showTab('mdc', this)">MDC</button>
</div>

<div class="tab-content active" id="sem1">

<details open>
<summary><strong>Mathematical Physics</strong></summary>

<details class="unit-block" id="mp-unit-1">
<summary>Unit 1: Vector Calculus</summary>

**Introduction:**

Vector algebra is a fundamental branch of mathematics that deals with mathematical
structures known as vectors. This branch of mathematics finds extensive applications in
physics, engineering, computer science, and various scientific disciplines.

Usually, a vector is defined as a quantity that has both magnitude and direction. However, there are some
exception to this; e.g., current electricity or pressure has both magnitude and direction, but
they are not vectors, because they do not follow the parallelogram law of vector addition. So,
the proper definition of a vector would be "any quantity that follows the parallelogram law of
vector addition" (Similarly, a scalar is defined as a quantity which remains unchanged under
any coordinate transformation). The parallelogram law of vector addition says that the sum of
two vectors is represented by the diagonal of the parallelogram formed by these vectors.

**Notation:**

A vector is denoted by a letter with an overhead arrow, e.g., \\(\vec{A}\\), and has two components: magnitude and direction, written as

\\[
\vec{A} = A\hat{n}
\\]

where \\(A\\) is the magnitude and \\(\hat{n}\\) is the direction, known as unit vector, of the given vector. The unit vector of any vector is obtained by dividing the given vector by its magnitude as

\\[
\hat{n} = \frac{\vec{A}}{A}
\\]

**Rectangular Resolution of a vector:**

In three-dimensional cartesian coordinates, a vector \\(\vec{A}\\) can be resolved into three components along the mutually perpendicular coordinate axes as

\\[
\vec{A} = A_x\hat{i} + A_y\hat{j} + A_z\hat{k}
\\]

Where, \\(A_x\\), \\(A_y\\) and \\(A_z\\) are the components of the vectors along \\(x\\)-, \\(y\\)- and \\(z\\)-axes respectively and \\(\hat{i}\\), \\(\hat{j}\\), \\(\hat{k}\\) are their corresponding unit vectors. The magnitude of \\(\vec{A}\\) is given by

\\[
|\vec{A}| = A = \sqrt{A_x^2 + A_y^2 + A_z^2}
\\]

and its unit vector is given by

\\[
\hat{n} = \frac{A_x\hat{i} + A_y\hat{j} + A_z\hat{k}}
{\sqrt{A_x^2 + A_y^2 + A_z^2}}
\\]

**Addition and Subtraction of vectors:**

Let us consider two vectors \\(\vec{A} = A_x\hat{i} + A_y\hat{j} + A_z\hat{k}\\) and \\(\vec{B} = B_x\hat{i} + B_y\hat{j} + B_z\hat{k}\\). The sum and difference of these vectors are given by:

\\[
\vec{A} + \vec{B} = (A_x+B_x)\hat{i} + (A_y+B_y)\hat{j} + (A_z+B_z)\hat{k}
\\]

\\[
\vec{A} - \vec{B} = (A_x-B_x)\hat{i} + (A_y-B_y)\hat{j} + (A_z-B_z)\hat{k}
\\]

**Example:** Let \\(\vec{A} = 5\hat{i} + 6\hat{j} - 3\hat{k}\\) and \\(\vec{B} = 4\hat{i} - 3\hat{j} - 7\hat{k}\\), then

\\[
\vec{A} + \vec{B} = (5+4)\hat{i} + (6-3)\hat{j} + (-3-7)\hat{k} = 9\hat{i} + 3\hat{j} - 10\hat{k}, \text{ and}
\\]

\\[
\vec{A} - \vec{B} = (5-4)\hat{i} + (6-(-3))\hat{j} + (-3-(-7))\hat{k} = \hat{i} + 9\hat{j} + 4\hat{k}.
\\]

**Triangle law of vector addition:** If two vectors are represented in magnitude and direction by two sides of a triangle taken in order, then their resultant is given by the third side of the triangle taken in opposite order.

**Product of two vectors:** There are two types of vector products - dot or scalar product and cross or vector product.

**Dot or scalar product:** The dot product of two vectors is the projection of one vector onto another vector, multiplied by the magnitude of the second vector. In other words, it is a measure of how much of one vector lies in the direction of another vector. The dot product of two vectors is a scalar quantity. Mathematically, it is given by

\\[
\vec{A}\cdot\vec{B} = AB\cos\theta, \text{ where } \theta \text{ is the angle between them.}
\\]

**N.B.:** The dot product of two mutually parallel vectors is maximum and that of two mutually perpendicular vectors is zero.

\\[
\vec{A}\cdot\vec{B} = AB\cos\theta = AB\cos0 = AB, \text{ when } \theta = 0, \text{ and}
\\]

\\[
\vec{A}\cdot\vec{B} = AB\cos\theta = AB\cos(\pi/2) = 0, \text{ when } \theta = \pi/2
\\]

Therefore, \\(\hat{i}\cdot\hat{i} = \hat{j}\cdot\hat{j} = \hat{k}\cdot\hat{k} = 1\\) and \\(\hat{i}\cdot\hat{j} = \hat{j}\cdot\hat{k} = \hat{k}\cdot\hat{i} = 0\\). Using these, we get

\\[
\vec{A}\cdot\vec{B} = (A_x\hat{i} + A_y\hat{j} + A_z\hat{k})\cdot(B_x\hat{i} + B_y\hat{j} + B_z\hat{k}) = A_xB_x + A_yB_y + A_zB_z
\\]

**Example - 1.1:** A force of 10 N applied at an angle 30° to an object produces a displacement of 5 m horizontally. Find the work done by the force.

**Solution:** The work done is given by:

\\[
w = fd\cos\theta = 10.5.\cos30^{\circ} = 25\sqrt{3}.
\\]

**Example - 1.2:** A force \\(\vec{f} = 5\hat{i} + 7\hat{j} - 3\hat{k}\\) acting on an object produces a displacement \\(\vec{d} = 2\hat{i} + \hat{j} + 4\hat{k}\\). Find the workdone and the inclination of force with respect to the displacement.

**Solution:** The workdone is given by:

\\[
w = \vec{f}\cdot\vec{d} = (5\hat{i}+7\hat{j}-3\hat{k})\cdot(2\hat{i}+\hat{j}+4\hat{k}) = 50 + 7 - 12 = 45.
\\]

Now,

\\[
\vec{f}\cdot\vec{d} = fd\cos\theta
\\]

\\[
\Rightarrow 45 = \sqrt{5^2+7^2+(-3)^2}\times\sqrt{2^2+1^2+4^2}\cos\theta
\\]

\\[
\Rightarrow \cos\theta = \frac{45}{\sqrt{83}\times\sqrt{21}} = \frac{45}{\sqrt{1743}}
\\]

\\[
\Rightarrow \theta = \cos^{-1}\left(\frac{45}{\sqrt{1743}}\right)
\\]

**Cross or vector product:** The cross product of two vectors represents the area of the parallelogram formed by these two vectors. The direction of the resultant vector can be determined by the right-hand rule. The cross product of two vectors is also a vector quantity. Mathematically, it is given by

\\[
\vec{A}\times\vec{B} = AB\sin\theta\,\hat{n}
\\]

where \\(\theta\\) is the angle between them and \\(\hat{n}\\) is the direction of the resultant vector which is perpendicular to the plane containing the two vectors.

**N.B.:** The cross product of two mutually parallel vectors is zero and that of two mutually perpendicular vectors is maximum.

\\[
|\vec{A}\times\vec{B}| = AB\sin\theta = AB\sin0 = 0, \text{ when } \theta = 0, \text{ and}
\\]

\\[
|\vec{A}\times\vec{B}| = AB\sin\theta = AB\sin(\pi/2) = AB, \text{ when } \theta = \pi/2
\\]

Therefore, \\(\hat{i}\times\hat{i} = \hat{j}\times\hat{j} = \hat{k}\times\hat{k} = 0\\) and \\(\hat{i}\times\hat{j} = \hat{k}, \hat{j}\times\hat{k} = \hat{i}, \hat{k}\times\hat{i} = \hat{j}\\).

The cross product of two vectors having rectangular components are evaluated using determinants as follows:

\\[
\vec{A}\times\vec{B} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\\\ A_x & A_y & A_z \\\\ B_x & B_y & B_z \end{vmatrix} = \hat{i}(A_yB_z - A_zB_y) - \hat{j}(A_xB_z - A_zB_x) + \hat{k}(A_xB_y - A_yB_x)
\\]

**Example 1.3:** Find the area of the parallelogram whose adjacent sides are \\(\vec{A} = 2\hat{i} - 4\hat{j} + 3\hat{k}\\) and \\(\vec{B} = \hat{i} + 3\hat{j} - 2\hat{k}\\).

**Solution:** The area of the given parallelogram is

\\[
\vec{A}\times\vec{B} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\\\ 2 & -4 & 3 \\\\ 1 & 3 & -2 \end{vmatrix} = \hat{i}(8-6) - \hat{j}(-4-3) + \hat{k}(6+4) = 2\hat{i} + 7\hat{j} + 10\hat{k}
\\]

**N.B.:** Dot product is commutative \\((\vec{A}\cdot\vec{B} = \vec{B}\cdot\vec{A})\\) but cross product is not commutative \\((\vec{A}\times\vec{B} = -\vec{B}\times\vec{A})\\)

**Scalar triple product:** The scalar triple product is defined as the dot product of one of the vectors with the cross product of the other two. It represents the volume of the parallelepiped whose three coterminous edges represent the three vectors \\(\vec{a}, \vec{b},\\) and \\(\vec{c}\\). Mathematically, it is given by

\\[
\vec{A}\cdot(\vec{B}\times\vec{C}) = \begin{vmatrix} A_x & A_y & A_z \\\\ B_x & B_y & B_z \\\\ C_x & C_y & C_z \end{vmatrix} = A_x(B_yC_z - B_zC_y) - A_y(B_xC_z - B_zC_x) + A_z(B_xC_y - B_yC_x)
\\]

**N.B.:** If the scalar triple product is equal to zero, then the three vectors are coplanar, since the parallelepiped defined by them would be flat and have no volume.

**Example 1.4:** Find the volume of the parallelopiped whose three co-terminus edges are given by: \\(\vec{a} = 2\hat{i} + 5\hat{j} - 4\hat{k}, \vec{b} = 7\hat{i} + 4\hat{j} + 3\hat{k}\\) and \\(\vec{c} = 5\hat{i} - 3\hat{j} + 2\hat{k}\\).

**Solution:** The volume of the parallelopiped is given by: 
\\[
\vec{a}\cdot(\vec{b}\times\vec{c}) = \begin{vmatrix} 2 & 5 & -4 \\\\ 7 & 4 & 3 \\\\ 5 & -3 & 2 \end{vmatrix} = 2(8+9) - 5(14-15) - 4(-21-20) = 203 \text{ cube unit.}
\\]

**Example 1.5:** For what values of \\(m\\) the following three vectors will be co-planar?

\\[
\vec{a} = 3\hat{i} + 4\hat{j} - 6\hat{k}, \vec{b} = 2\hat{i} + m\hat{j} + 2\hat{k} \text{ and } \vec{c} = 4\hat{i} + \hat{j} - 2\hat{k}.
\\]

**Solution:** The three vectors \\(\vec{a}, \vec{b}\\) and \\(\vec{c}\\) will be coplanar if \\(\vec{a}\cdot(\vec{b}\times\vec{c}) = 0\\).

Now,

\\[
\vec{a}\cdot(\vec{b}\times\vec{c}) = 3(-2m-2) - 4(-4-8) - 6(-2-4m)
\\]

\\[
\Rightarrow 0 = 18m + 30 \Rightarrow m = -5/3.
\\]

**Differentiation of Vectors**

**Position vector:** If \\((x, y, z)\\) be the coordinate of a point particle in the 3-D cartesian coordinate system, then a line joining the origin and the given point is called the position vector of the particle and is given by \\(\vec{r} = x\hat{i} + y\hat{j} + z\hat{k}\\). The differential of position vector given by \\(d\vec{r} = dx\hat{i} + dy\hat{j} + dz\hat{k}\\) is known as the line element or the infinitesimal displacement vector. If \\((x_1, y_1, z_1)\\) and \\((x_2, y_2, z_2)\\) are the coordinates of two points in 3-D cartesian coordinates system, then the line joining them is given by \\(\vec{r}_{21} = (x_2-x_1)\hat{i} + (y_2-y_1)\hat{j} + (z_2-z_1)\hat{k}\\). This vector is known as the separation vector.

**Velocity:** The velocity of the particle is the rate of change of position vector of the particle as given below:

\\[
\vec{v} = \frac{d\vec{r}}{dt} = \frac{dx}{dt}\hat{i} + \frac{dy}{dt}\hat{j} + \frac{dz}{dt}\hat{k} = v_x\hat{i} + v_y\hat{j} + v_z\hat{k}
\\]

**Acceleration:** The acceleration of the particle is the rate of change of velocity of the particle as given below:

\\[
\vec{a} = \frac{d\vec{v}}{dt} = \frac{d^2\vec{r}}{dt^2} = \frac{d^2x}{dt^2}\hat{i} + \frac{d^2y}{dt^2}\hat{j} + \frac{d^2z}{dt^2}\hat{k}
\\]

**Example 1.6:** A position vector of a particle is given by, \\(\vec{r} = (t^3+3t)\hat{i} + (2t^4+6)\hat{j} + (2t^2-t^4)\hat{k}\\), where \\(t\\) is time. Find the velocity and acceleration of the particle at \\(t = 3\\).

**Solution:** The position vector is given by:

\\[
\vec{r} = (t^3+3t)\hat{i} + (2t^4+6)\hat{j} + (2t^2-t^4)\hat{k}
\\]

Velocity, \\(\vec{v} = \dfrac{d\vec{r}}{dt} = (3t^2+3)\hat{i} + 8t^3\hat{j} + (4t-4t^3)\hat{k}\\)

At \\(t=3\\), \\(\vec{v} = 30\hat{i} + 216\hat{j} - 96\hat{k}\\).
Acceleration, \\(\vec{a} = \dfrac{d\vec{v}}{dt} = 6t\hat{i} + 24t^2\hat{j} + (4-12t^2)\hat{k}\\)

At \\(t=3\\), \\(\vec{a} = 18\hat{i} + 216\hat{j} - 104\hat{k}\\).

**Example 1.7:** The position of a point particle at a given instant are given by \\(x = 2t^3\\), \\(y = (2t-3t^3)\\), \\(z = (t^2+3t)\\), where \\(t\\) is time. Find the velocity and tangential component of the acceleration at \\(t = 1\\).

**Solution:** We have \\(x = 2t^3, y = (2t-3t^3), z = (t^2+3t)\\). The position vector is given by:

\\[
\vec{r} = x\hat{i} + y\hat{j} + z\hat{k} = 2t^3\hat{i} + (2t-3t^3)\hat{j} + (t^2+3t)\hat{k}
\\]

Velocity, \\(\vec{v} = \dfrac{d\vec{r}}{dt} = 6t^2\hat{i} + (2-9t^2)\hat{j} + (2t+3)\hat{k}\\), which is also the tangent vector.

At \\(t=1\\), \\(\vec{v} = 6\hat{i} - 7\hat{j} + 5\hat{k}\\)

Unit Tangent vector, \\(\hat{T} = \dfrac{\vec{v}}{|\vec{v}|} = \dfrac{6\hat{i}-7\hat{j}+5\hat{k}}{\sqrt{6^2+(-7)^2+5^2}} = \dfrac{6\hat{i}-7\hat{j}+5\hat{k}}{\sqrt{110}}\\)

Acceleration, \\(\vec{a} = \dfrac{d\vec{v}}{dt} = 12t\hat{i} - 18t\hat{j} + 2\hat{k}\\).

At \\(t=1\\), \\(\vec{a} = 12\hat{i} - 18\hat{j} + 2\hat{k}\\).

Therefore, the tangential component of the acceleration at \\(t = 1\\) is

\\[
\hat{T}\cdot\vec{a} = \frac{6\hat{i}-7\hat{j}+5\hat{k}}{\sqrt{110}}\cdot(12\hat{i}-18\hat{j}+2\hat{k}) = \frac{1}{\sqrt{110}}(72+126+10) = \frac{208}{\sqrt{110}}
\\]

**Example 1.8:** Show that \\(\dfrac{d}{dt}\left[\vec{u}\cdot\left(\dfrac{d\vec{v}}{dt}\times\dfrac{d^2\vec{v}}{dt^2}\right)\right] = \vec{u}\cdot\left(\dfrac{d\vec{v}}{dt}\times\dfrac{d^3\vec{v}}{dt^3}\right)\\)

**Solution:** We know that

\\[
\vec{u}\cdot\left(\frac{d\vec{v}}{dt}\times\frac{d^2\vec{v}}{dt^2}\right)
\\]

\\[
\Rightarrow \frac{d}{dt}\left[\vec{u}\cdot\left(\frac{d\vec{v}}{dt}\times\frac{d^2\vec{v}}{dt^2}\right)\right] = \frac{d\vec{u}}{dt}\cdot\left(\frac{d\vec{v}}{dt}\times\frac{d^2\vec{v}}{dt^2}\right) + \vec{u}\cdot\left(\frac{d^2\vec{v}}{dt^2}\times\frac{d^2\vec{v}}{dt^2}\right) + \vec{u}\cdot\left(\frac{d\vec{v}}{dt}\times\frac{d^3\vec{v}}{dt^3}\right)
\\]

\\[
= 0 + 0 + \vec{u}\cdot\left(\frac{d\vec{v}}{dt}\times\frac{d^3\vec{v}}{dt^3}\right) = \vec{u}\cdot\left(\frac{d\vec{v}}{dt}\times\frac{d^3\vec{v}}{dt^3}\right)
\\]

**Gradient of a Scalar Function:**

Let us consider a scalar function \\(\phi = \phi(x, y, z)\\). The total differential of the function is given by

\\[
d\phi = \frac{\partial\phi}{\partial x}dx + \frac{\partial\phi}{\partial y}dy + \frac{\partial\phi}{\partial z}dz = \left(\frac{\partial\phi}{\partial x}\hat{i} + \frac{\partial\phi}{\partial y}\hat{j} + \frac{\partial\phi}{\partial z}\hat{k}\right)\cdot(dx\hat{i}+dy\hat{j}+dz\hat{k}) = \vec{\nabla}\phi \cdot d\vec{r}
\\]

Here, \\(\vec{\nabla}\phi = \dfrac{\partial\phi}{\partial x}\hat{i} + \dfrac{\partial\phi}{\partial y}\hat{j} + \dfrac{\partial\phi}{\partial z}\hat{k}\\) is known as the gradient of the scalar function \\(\phi\\). The vector operator \\(\vec{\nabla} = \dfrac{\partial}{\partial x}\hat{i} + \dfrac{\partial}{\partial y}\hat{j} + \dfrac{\partial}{\partial z}\hat{k}\\) is called the "Del" operator.

**N.B.:** The gradient of a scalar function is a vector quantity. Its direction is along the maximum change of the scalar function \\(\phi\\). Physically it represents the maximum rate of change of a function. For example, if \\(\phi(x,y)\\) represents the elevation (height) of a hill at a point \\((x,y)\\), then the gradient of the function \\(\vec{\nabla}\phi\\) points towards the steepest ascent from that point.

**Example 1.9:** Find the gradient of the function \\(\psi(x,y,z) = x^2y^3z^4\\).

**Solution:** The gradient of the function is given by:

\\[
\vec{\nabla}\psi = \frac{\partial\psi}{\partial x}\hat{i} + \frac{\partial\psi}{\partial y}\hat{j} + \frac{\partial\psi}{\partial z}\hat{k} = (2xy^3z^4)\hat{i} + (3x^2y^2z^4)\hat{j} + (4x^2y^3z^3)\hat{k}
\\]

**Example 1.10:** If \\(\psi = x^3z^2 - y^4\\), find \\(\vec{\nabla}\psi\\) at the point \\((2,-1,-3)\\).

**Solution:** The gradient of the function is given by:

\\[
\vec{\nabla}\psi = (3x^2z^2)\hat{i} - 4y^3\hat{j} + 2x^3z\hat{k}
\\]

At \\((2,-1,-3)\\), \\(\vec{\nabla}\psi = 108\hat{i} + 4\hat{j} - 24\hat{k}\\).

**Newton's gravitational force as the gradient of a scalar potential:**

Consider a point mass \\(m\\) located at a distance \\(r\\) from the centre of the earth. The gravitational potential at a distance \\(r\\) from the centre is:

\\[
\Phi(r) = -\frac{GM}{r}
\\]

where \\(G\\) is the universal gravitational constant and \\(M\\) is the mass of the Earth. The gravitational force on the point mass \\(m\\) is given by:

\\[
\vec{F} = -m\vec{\nabla}\Phi = m\vec{\nabla}\left(\frac{GM}{r}\right)
\\]

In cartesian coordinate system, \\(\vec{r} = x\hat{i}+y\hat{j}+z\hat{k}\\) and \\(r = \sqrt{x^2+y^2+z^2}\\). Therefore,

\\[
\vec{F} = -GMm\left[\frac{x}{r^3}\hat{i}+\frac{y}{r^3}\hat{j}+\frac{z}{r^3}\hat{k}\right] = -\frac{GMm}{r^3}\vec{r} = -\frac{GMm}{r^2}\hat{r}
\\]

Thus, the gravitational force can be expressed as the negative gradient of potential.

**Normal and Directional Derivative:**

**(i) Normal:** let us consider a family of surfaces \\(\phi(x,y,z) = c\\), where \\(c\\) is constant. Differentiating \\(\phi\\), we get, \\(d\phi = 0\\). But, \\(d\phi = \vec{\nabla}\phi\cdot d\vec{r}\\), therefore \\(\vec{\nabla}\phi\cdot d\vec{r} = 0 \Rightarrow \vec{\nabla}\phi \perp d\vec{r}\\). Since, \\(d\vec{r}\\) is directed along the tangent of the surface, \\(\vec{\nabla}\phi\\) is normal to the given surface.

**Example 1.11:** Find the normal to the surface \\(x^2y^3z^4 = 5\\) at \\((1, -1, 1)\\).

**Solution:** Let us consider \\(\phi(x,y,z) = x^2y^3z^4 - 5\\). We know \\(\vec{\nabla}\phi\\) is the normal of the surface \\(\phi(x,y,z) = c\\). Therefore,

\\[
\vec{\nabla}\phi = 2xy^3z^4\hat{i} + 3x^2y^2z^4\hat{j} + 4x^2y^3z^3\hat{k}
\\]

\\(\vec{\nabla}\phi(1,-1,1) = -2\hat{i} + 3\hat{j} - 4\hat{k}\\), which is the required normal.

**Example 1.12:** Find the directional derivative of \\(\phi(x,y,z) = xy^2+yz^3\\) at the point \\((2, -1, 1)\\) in the direction of \\(\hat{i}+2\hat{j}+2\hat{k}\\). (G. U. 2022)

**Solution:** The function is given by: \\(\phi(x,y,z) = xy^2+yz^3\\), therefore,

\\[
\vec{\nabla}\phi = y^2\hat{i} + (2xy+z^3)\hat{j} + 3yz^2\hat{k}
\\]

\\(\vec{\nabla}\phi(2,-1,1) = \hat{i} - 3\hat{j} - 3\hat{k}\\)

Now, the direction vector is given by: \\(\vec{v} = \hat{i}+2\hat{j}+2\hat{k}\\)

The unit vector for the above direction vector is given by:

\\[
\hat{v} = \frac{\vec{v}}{|\vec{v}|} = \frac{\hat{i}+2\hat{j}+2\hat{k}}{\sqrt{1^2+2^2+2^2}} = \frac{1}{3}(\hat{i}+2\hat{j}+2\hat{k})
\\]

Therefore, the directional derivative of \\(\phi\\) at \\((2,-1,1)\\) is given by

\\[
\vec{\nabla}\phi(2,-1,1)\cdot\hat{v} = (\hat{i}-3\hat{j}-3\hat{k})\cdot\frac{1}{3}(\hat{i}+2\hat{j}+2\hat{k}) = \frac{1}{3}(1-6-6) = -\frac{11}{3}
\\]

**Divergence of a Vector Function:**

The divergence of a vector function \\(\vec{F} = F_x\hat{i}+F_y\hat{j}+F_z\hat{k}\\) is denoted by \\(\text{div}(\vec{F})\\) or \\(\vec{\nabla}\cdot\vec{F}\\) defined as

\\[
\vec{\nabla}\cdot\vec{F} = \frac{\partial F_x}{\partial x}+\frac{\partial F_y}{\partial y}+\frac{\partial F_z}{\partial z}
\\]

**Note:** 1. The divergence of the vector function is a scalar function.
2. If \\(\vec{\nabla}\cdot\vec{F} = 0\\), then the vector is called solenoidal.

**Example 1.13:** Find the divergence of \\(\vec{F} = x^2y\hat{i}+2xz\hat{j}+yz^2\hat{k}\\).

**Solution:** The divergence of the given function is given by:

\\[
\vec{\nabla}\cdot\vec{F} = \frac{\partial}{\partial x}(x^2y)+\frac{\partial}{\partial y}(2xz)+\frac{\partial}{\partial z}(yz^2) = 2xy+0+2yz = 2xy+2yz
\\]

**Example 1.14:** If \\(\phi = xy+yz+zx\\) and \\(\vec{F} = \vec{\nabla}\phi\\), then find \\(\vec{\nabla}\cdot\vec{F}\\). (G.U. 2022)

**Solution:** The scalar function is given by: \\(\phi = xy+yz+zx\\). Now, the gradient function \\(\vec{F} = \vec{\nabla}\phi\\) can be calculated as follows:

\\[
\vec{F} = \vec{\nabla}\phi = (y+z)\hat{i} + (x+z)\hat{j} + (x+y)\hat{k}
\\]

Now, \\(\vec{\nabla}\cdot\vec{F} = \dfrac{\partial}{\partial x}(y+z)+\dfrac{\partial}{\partial y}(x+z)+\dfrac{\partial}{\partial z}(x+y) = 0+0+0 = 0\\)

**Curl of a Vector Function:**

The curl of a vector function \\(\vec{A} = A_x\hat{i}+A_y\hat{j}+A_z\hat{k}\\) is denoted by \\(\text{curl}(\vec{A})\\) or \\(\vec{\nabla}\times\vec{A}\\) defined as

\\[
\vec{\nabla}\times\vec{A} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\\\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\\\ A_x & A_y & A_z \end{vmatrix} = \hat{i}\left(\frac{\partial A_z}{\partial y}-\frac{\partial A_y}{\partial z}\right) - \hat{j}\left(\frac{\partial A_z}{\partial x}-\frac{\partial A_x}{\partial z}\right) + \hat{k}\left(\frac{\partial A_y}{\partial x}-\frac{\partial A_x}{\partial y}\right)
\\]

**Note:** 1. The curl of the vector function is also a vector function.
2. If \\(\vec{\nabla}\times\vec{A} = 0\\), then the vector is called irrotational.

**Example 1.15:** Find the curl of the function \\(\vec{v} = (x^2yz)\hat{i} + (3x^2y-2y)\hat{j} + (xz^2+xy^2z)\hat{k}\\) at the point \\((2, -1, 1)\\).

**Solution:** The curl of the function is given by:

\\[
\vec{\nabla}\times\vec{A} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\\\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\\\ x^2yz & 3x^2y-2y & xz^2+xy^2z \end{vmatrix}
\\]

\\[
= \hat{i}\left[\frac{\partial}{\partial y}(xz^2+xy^2z)-\frac{\partial}{\partial z}(3x^2y-2y)\right] - \hat{j}\left[\frac{\partial}{\partial x}(xz^2+xy^2z)-\frac{\partial}{\partial z}(x^2yz)\right] + \hat{k}\left[\frac{\partial}{\partial x}(3x^2y-2y)-\frac{\partial}{\partial y}(x^2yz)\right]
\\]

\\[
= \hat{i}[2xyz] - \hat{j}\left[(z^2+y^2z)-x^2y\right] + \hat{k}[6xy-x^2z]
\\]

\\[
\vec{\nabla}\times\vec{A}\Big|_{(2,-1,1)} = -4\hat{i}-4\hat{j}-16\hat{k}
\\]

**Second Order Derivatives**

**(i) Curl of Gradient:** The Curl of the gradient of a scalar function is always zero

**Proof:** Let us consider a scalar function \\(\phi = \phi(x,y,z)\\). The gradient of the function is given by:

\\[
\vec{\nabla}\phi = \frac{\partial\phi}{\partial x}\hat{i} + \frac{\partial\phi}{\partial y}\hat{j} + \frac{\partial\phi}{\partial z}\hat{k}
\\]

Now, the curl of the above gradient is given by

\\[
\vec{\nabla}\times\vec{\nabla}\phi = \hat{i}\left[\frac{\partial}{\partial y}\left(\frac{\partial\phi}{\partial z}\right)-\frac{\partial}{\partial z}\left(\frac{\partial\phi}{\partial y}\right)\right] - \hat{j}\left[\frac{\partial}{\partial x}\left(\frac{\partial\phi}{\partial z}\right)-\frac{\partial}{\partial z}\left(\frac{\partial\phi}{\partial x}\right)\right] + \hat{k}\left[\frac{\partial}{\partial x}\left(\frac{\partial\phi}{\partial y}\right)-\frac{\partial}{\partial y}\left(\frac{\partial\phi}{\partial x}\right)\right]
\\]

\\[
\vec{\nabla}\times\vec{\nabla}\phi = 0\hat{i} - 0\hat{j} + 0\hat{k} = 0
\\]

**Note:** If the curl of a vector function \\((\vec{A})\\) is zero \\((\vec{\nabla}\times\vec{A} = 0)\\), the function can be expressed as the gradient of a scalar function \\((\vec{A} = \vec{\nabla}\phi)\\).

**(ii) Divergence of Curl:** The divergence of the curl of a vector function is always zero.

**Proof:** Let us consider a vector function \\(\vec{F} = F_x\hat{i}+F_y\hat{j}+F_z\hat{k}\\). The curl of the function is given by:

\\[
\vec{\nabla}\times\vec{F} = \hat{i}\left(\frac{\partial F_z}{\partial y}-\frac{\partial F_y}{\partial z}\right) - \hat{j}\left(\frac{\partial F_z}{\partial x}-\frac{\partial F_x}{\partial z}\right) + \hat{k}\left(\frac{\partial F_y}{\partial x}-\frac{\partial F_x}{\partial y}\right)
\\]

Now, the divergence of the above curl is

\\[
\vec{\nabla}\cdot(\vec{\nabla}\times\vec{F}) = \frac{\partial}{\partial x}\left(\frac{\partial F_z}{\partial y}-\frac{\partial F_y}{\partial z}\right) - \frac{\partial}{\partial y}\left(\frac{\partial F_z}{\partial x}-\frac{\partial F_x}{\partial z}\right) + \frac{\partial}{\partial z}\left(\frac{\partial F_y}{\partial x}-\frac{\partial F_x}{\partial y}\right)
\\]

\\[
\vec{\nabla}\cdot(\vec{\nabla}\times\vec{F}) = 0
\\]

**(iii) Divergence of Gradient:** The Laplacian of a scalar function

Let us consider a scalar function \\(\phi = \phi(x,y,z)\\). The gradient of the function is given by \\(\vec{\nabla}\phi\\). The divergence of the above gradient is given by

\\[
\vec{\nabla}\cdot\vec{\nabla}\phi = \nabla^2\phi = \frac{\partial^2\phi}{\partial x^2}+\frac{\partial^2\phi}{\partial y^2}+\frac{\partial^2\phi}{\partial z^2}
\\]

This is called the Laplacian of the scalar function \\(\phi = \phi(x,y,z)\\). The operator \\(\nabla^2 = \dfrac{\partial^2}{\partial x^2}+\dfrac{\partial^2}{\partial y^2}+\dfrac{\partial^2}{\partial z^2}\\) is called the Laplacian operator.

**Example 1.16:** A vector function is given by \\(\vec{F} = (x^3-y^2)\hat{i} - (2xy+y^2)\hat{j}\\). Show that the function is irrotational and hence find the scalar potential.

**Solution:** The curl of the function works out to zero, hence the vector is irrotational. Let \\(\phi\\) be the scalar potential such that \\(\vec{F} = \vec{\nabla}\phi\\).

Now,

\\[
d\phi = \vec{\nabla}\phi\cdot d\vec{r} = \vec{F}\cdot d\vec{r} = (x^3-y^2)dx - (2xy+y^2)dy
\\]

\\[
\phi = \int(x^3-y^2)dx - \int(2xy+y^2)dy + C = \frac{1}{4}x^4 - xy^2 - \frac{1}{3}y^3 + C
\\]

**Integration of Vectors**

Vector integration is a fundamental concept in mathematical physics, which is essential for understanding various physical phenomena, such as fluid flow, electromagnetic fields, and mechanics. Integrating a vector function involves finding a vector whose derivative yields the original vector function.

There are three primary types of vector integration: line, surface, and volume.

**Line Integration:** Line integration involves integrating a vector field along a curve or path. Let \\(\vec{F}\\) be a vector function, then its line integration along a curve \\(c\\) is given by

\\[
W = \int_c \vec{F}\cdot d\vec{r}
\\]

where, \\(d\vec{r} = dx\hat{i}+dy\hat{j}+dz\hat{k}\\), is the line element. In mechanics, the work done by a force \\(\vec{F} = F_x\hat{i}+F_y\hat{j}+F_z\hat{k}\\) as an object moves along a path C is calculated using a line integral. The work done as the particle moves along a curved path from point A to point B is:

\\[
W = \int_C \vec{F}\cdot d\vec{r} = \int_C (F_x dx + F_y dy + F_z dz)
\\]

**Example 1.17:** A force \\(\vec{F} = 2x\hat{i}+3y\hat{j}\\) displaces a particle along a parabola \\(y = 4x^2\\) from a point A(0, 0) to B(1, 4). Calculate the work done by the force.

**Solution:** The position vector is given by \\(\vec{r} = x\hat{i}+y\hat{j}\\) or \\(d\vec{r} = dx\hat{i}+dy\hat{j}\\). Now, it is given that \\(y=4x^2\\), which gives \\(dy=8x\,dx\\). Therefore, \\(d\vec{r} = dx\hat{i}+8x\,dx\,\hat{j}\\)

Now, \\(\vec{F}\cdot d\vec{r} = (2x\hat{i}+12x^2\hat{j})\cdot(dx\hat{i}+8x\,dx\,\hat{j}) = (2x+96x^3)dx\\) unit.

\\[
\int_A^B \vec{F}\cdot d\vec{r} = \int_0^1(2x+96x^3)dx = \left[x^2+96\frac{x^4}{4}\right]_0^1 = 1+24 = 25
\\]

**Example 1.18:** Calculate the work done by the force field \\(\vec{F} = y\hat{i}+x\hat{j}\\) on a particle as it moves counterclockwise along the boundary of a square with vertices at (0, 0), (1, 0), (1, 1), and (0, 1).

**Solution:** To solve this problem, we will divide the square into four segments:

(i) From (0,0) to (1,0) along the x-axis: Here, \\(y=0\\) so \\(dy=0\\) which gives \\(d\vec{r}=dx\hat{i}\\). Therefore, \\(W_1 = \int_0^1 y\,dx = 0\\), since \\(y=0\\)

(ii) From (1,0) to (1,1) along a line parallel to the y-axis: Here, \\(x=1\\) or \\(dx=0\\) which gives \\(d\vec{r}=dy\hat{j}\\). Therefore, \\(W_2 = \int_0^1 x\,dy = 1\int_0^1 dy = 1\\)

(iii) From (1,1) to (0,1) along a line parallel to the x-axis: Here, \\(y=1\\) so \\(dy=0\\) which gives \\(d\vec{r}=dx\hat{i}\\). Therefore, \\(W_3 = \int_1^0 y\,dx = \int_1^0 dx = -1\\)

(iv) From (0,1) to (0,0) along the y-axis: Here, \\(x=0\\) or \\(dx=0\\) which gives \\(d\vec{r}=dy\hat{j}\\). Therefore, \\(W_4 = \int_1^0 x\,dy = 0\\), since \\(x=0\\)

Adding all the four segments, we get

\\[
W = W_1+W_2+W_3+W_4 = 0+1-1+0 = 0
\\]

**N.B.:** This result is a manifestation of the fact that certain force fields, such as conservative fields, result in zero net work when traversing a closed loop.

**Example 1.19:** A particle moves along the curve defined by the parametric equations \\(x(t)=t\\), \\(y(t)=t^2\\), and \\(z(t)=t^3\\). The particle is subjected to a force field \\(\vec{F} = 2x\hat{i}+y\hat{j}+z\hat{k}\\). Calculate the work done by the force field as the particle moves from \\(t=0\\) to \\(t=1\\) along this path.

**Solution:** Differentiating the parametric equations, we get, \\(dx=dt\\), \\(dy=2t\,dt\\), \\(dz=3t^2dt\\). The line element is given by, \\(d\vec{r} = (\hat{i}+2t\hat{j}+3t^2\hat{k})dt\\). Also, the force can be written as \\(\vec{F} = 2t\hat{i}+t^2\hat{j}+t^3\hat{k}\\). Therefore,

\\[
\vec{F}\cdot d\vec{r} = (2t\hat{i}+t^2\hat{j}+t^3\hat{k})\cdot(\hat{i}+2t\hat{j}+3t^2\hat{k})dt = (2t+2t^3+3t^5)dt
\\]

Integrating, we get

\\[
W = \int_0^1(2t+2t^3+3t^5)dt = \left[t^2+\frac{1}{2}t^4+\frac{1}{2}t^6\right]_0^1 = 1+\frac{1}{2}+\frac{1}{2} = 2
\\]

**Surface Integral:** Surface integrals is a fundamental concept in vector calculus. Surface integrals enable the integration of scalar or vector fields over a two-dimensional surface in three-dimensional space. Surface integrals are particularly important in physics, where they are used to compute quantities like flux, which measures the flow of a field (such as an electric or magnetic field) through a surface.

For a scalar field \\(\psi(x,y,z)\\) defined on the surface S, the surface integral is expressed as

\\[
I = \iint_S \psi\,dS
\\]

Where \\(dS\\) is an infinitesimal area element on the surface S. For a vector field \\(\vec{F}\\), the surface integral, also known as the flux of the field through S, is given by

\\[
I = \iint_S \vec{F}\cdot d\vec{S} = \iint_S \vec{F}\cdot\hat{n}\,dS
\\]

Where, \\(\hat{n}\\) is the unit vector normal to the surface. One example of the surface integral is the flux of the electrostatic field, which is equal to \\(1/\epsilon_0\\) times the charge inside the surface, as given below:

\\[
\phi = \iint \vec{E}\cdot d\vec{S} = q/\epsilon_0
\\]

Now, the projection of \\(dS\\) on \\(x-y\\) plane is \\(dA_{xy}\\), i.e., \\(dA_{xy}=dx\,dy = dS\cos\theta\\), where \\(\theta\\) is the angle between z-axis \\((\hat{k})\\) and normal \\((\hat{n})\\) to the surface, which gives \\(\cos\theta = \hat{k}\cdot\hat{n}\\). Therefore, the element of surface integral can be written as, \\(dS = dx\,dy/(\hat{k}\cdot\hat{n})\\). With this, the surface integral of a vector field \\(\vec{F}\\) over a surface S is given by

\\[
I = \iint_S \vec{F}\cdot d\vec{S} = \iint_S \vec{F}\cdot\hat{n}\,dS = \iint_S \vec{F}\cdot\hat{n}\,\frac{dx\,dy}{(\hat{k}\cdot\hat{n})}
\\]

**Example 1.20:** Consider the vector field \\(\vec{F} = 2x\hat{i}-y\hat{j}+3z\hat{k}\\) in Cartesian coordinates. Calculate the flux of this vector field through the triangular plane surface S in the first octant, bounded by the coordinate planes and the plane \\(x+y+z=1\\).

**Solution:** Let \\(\phi = x+y+z-1\\) be the surface. The gradient, which is normal, to the surface is given by

\\[
\vec{\nabla}\phi = \hat{i}+\hat{j}+\hat{k}
\\]

The unit vector normal to the surface is given by:

\\[
\hat{n} = \frac{\hat{i}+\hat{j}+\hat{k}}{\sqrt{1+1+1}} = \frac{1}{\sqrt{3}}(\hat{i}+\hat{j}+\hat{k})
\\]

Therefore, \\(\vec{F}\cdot\hat{n} = \dfrac{1}{\sqrt{3}}(2x-y+3z)\\) and \\(\hat{n}\cdot\hat{k} = \dfrac{1}{\sqrt{3}}\\)

Now, we can write the surface integral as

\\[
I = \iint_R \vec{F}\cdot\hat{n}\,\frac{dx\,dy}{(\hat{k}\cdot\hat{n})} = \iint_R \frac{1}{\sqrt{3}}(2x-y+3z)\cdot\sqrt{3}\,dx\,dy = \iint_R(2x-y+3z)\,dx\,dy
\\]

The bounding surface is given by, \\(x+y+z=1\\) which gives \\(z=1-x-y\\). With this, the above integral can be written as

\\[
I = \iint_R (3-x-4y)\,dx\,dy = \int_0^1\int_0^{1-x}(3-x-4y)\,dy\,dx
\\]

\\[
I = \int_0^1 \left[3y-xy-2y^2\right]_0^{1-x}dx = \int_0^1\left[3(1-x)-x(1-x)-2(1-x)^2\right]dx
\\]

\\[
I = \int_0^1 (1-x^2)\,dx = \left[x-\frac{1}{3}x^3\right]_0^1 = 1-\frac{1}{3} = \frac{2}{3}
\\]

**Example 1.21:** Find the surface integral of the vector function \\(\vec{F} = yz\hat{i}+zx\hat{j}+xy\hat{k}\\) over the surface of the cube bounded by the planes \\(x=0, x=2, y=0, y=2, z=0, z=2\\).

**Solution:** The cube has six faces, each parallel to one of the coordinate planes. We will find the surface integral for each surface and add them to get the final result.

1. For the surface \\(S_1\\) at \\(x=2\\), \\(d\vec{S_1}=dy\,dz\,\hat{i}\\). Therefore, \\(\vec{F}\cdot d\vec{S_1} = yz\,dy\,dz\\).

\\[
I_1 = \int_0^2\int_0^2 yz\,dy\,dz = \left[\frac{1}{2}y^2\right]_0^2 \times \left[\frac{1}{2}z^2\right]_0^2 = 4
\\]

2. For the surface \\(S_2\\) at \\(y=2\\), \\(d\vec{S_2}=dx\,dz\,\hat{j}\\). Therefore, \\(\vec{F}\cdot d\vec{S_2} = xz\,dx\,dz\\).

\\[
I_2 = \int_0^2\int_0^2 xz\,dx\,dz = 4
\\]

3. For the surface \\(S_3\\) at \\(z=2\\), \\(d\vec{S_3}=dx\,dy\,\hat{k}\\). Therefore, \\(\vec{F}\cdot d\vec{S_3} = xy\,dx\,dy\\).

\\[
I_3 = \int_0^2\int_0^2 xy\,dx\,dy = 4
\\]

4. For the surface \\(S_4\\) at \\(x=0\\), \\(d\vec{S_4}=-dy\,dz\,\hat{i}\\). Therefore \\(\vec{F}\cdot d\vec{S_4}=-yz\,dy\,dz\\). Hence \\(I_4 = 0\\).

Similarly for the surfaces at \\(y=0\\) \\((S_5)\\) and at \\(z=0\\) \\((S_6)\\), \\(\vec{F}\cdot d\vec{S_5} = \vec{F}\cdot d\vec{S_6} = 0\\) and hence \\(I_5=I_6=0\\).

Adding them all, we get

\\[
I = \sum_{k=1}^{6}I_k = 4+4+4+0+0+0 = 12
\\]

**Volume Integral:** A volume integral allows us to compute quantities that are distributed over a three-dimensional region in space. Mathematically, the volume integral of a scalar function \\(\rho(x,y,z)\\) over a volume V is expressed as:

\\[
I = \iiint_V \rho\,dV = \iiint_V \rho\,dx\,dy\,dz
\\]

For example, if \\(\rho(x,y,z)\\) represents the charge density in a region of space, the total charge \\(Q\\) is given by the volume integral of \\(\rho(x,y,z)\\) over the volume V as follows:

\\[
Q = \iiint_V \rho(x,y,z)\,dV
\\]

**Example 1.22:** A rectangular box occupies the region \\(0 \le x \le 2\\), \\(0 \le y \le 3\\) and \\(0 \le z \le 4\\) in space. The charge density within the box is given by \\(\rho(x,y,z) = x+y+z\\) (in units of charge per unit volume). Calculate the total charge \\(Q\\) contained within the box.

**Solution:** The total charge \\(Q\\) is given by the volume integral of the charge density over the volume of the box:

\\[
Q = \int_0^2\int_0^3\int_0^4(x+y+z)\,dz\,dy\,dx = \int_0^2\int_0^3\left[xz+yz+\frac{1}{2}z^2\right]_0^4dy\,dx
\\]

\\[
Q = \int_0^2\int_0^3(4x+4y+8)\,dy\,dx = \int_0^2\left[4xy+2y^2+8y\right]_0^3dx = \int_0^2(12x+42)\,dx
\\]

\\[
Q = \left[6x^2+42x\right]_0^2 = 24+84 = 108 \text{ unit of charge.}
\\]

**Fundamental Theorems in Vector Calculus**

**Green's Theorem:** Green's Theorem provides a relationship between a line integral around a simple, closed curve C and a double integral over the plane region R that C encloses. It is a fundamental result in vector calculus.

Let C be a positively oriented, piecewise smooth, simple closed curve in the plane, and let R be the region enclosed by C. If \\(P(x,y)\\) and \\(Q(x,y)\\) are functions with continuous partial derivatives on an open region that contains R and its boundary C, then Green's Theorem states:

\\[
\oint_C (P\,dx+Q\,dy) = \iint_R \left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)dx\,dy
\\]

**Stokes Theorem:** Stokes' theorem relates the surface integral of the curl of a vector field over a surface to the line integral of the vector field along the boundary of that surface. It states that the surface integral of the curl of a vector field in a region R is equal to the line integral of the vector field along a curve C enclosing the region R. Mathematically,

\\[
\oint_C \vec{F}\cdot d\vec{r} = \iint_R (\vec{\nabla}\times\vec{F})\cdot d\vec{S}
\\]

**Gauss's Divergence Theorem:** Gauss's divergence theorem relates the volume integral of the divergence of a vector field to its surface integral. It states that the volume integral of the divergence of a vector function over a volume V is equal to the surface integral of the vector function over a surface S that encloses the volume V. Mathematically,

\\[
\iint_S \vec{F}\cdot d\vec{S} = \iiint_V (\vec{\nabla}\cdot\vec{F})\,dV
\\]

The proof and discussion on this theorem is beyond the scope of this book.
<button class="print-btn" data-html2canvas-ignore="true" onclick="exportUnit('mp-unit-1','Vector-Calculus-Notes.pdf')">Export this unit to PDF</button>
</details>

<details class="unit-block" id="mp-unit-2">
<summary>Unit 2: Curvilinear Coordinates</summary>
<p><em></em></p>
 
  **Orthogonal Curvilinear Coordinates**

An orthogonal curvilinear coordinate system is a generalization of the Cartesian coordinate system, where the coordinate lines (or surfaces) are curved rather than straight, but they (actually their tangent) remain mutually perpendicular (orthogonal) at every point. These coordinate systems are particularly useful in solving problems with symmetry that aren't easily addressed in Cartesian coordinates, such as problems involving circular, spherical, or cylindrical shapes. The examples are the spherical polar coordinate system and cylindrical coordinate system.

If \\((x, y, z)\\) are the coordinates of a point \\(P\\) in cartesian coordinate system, then the curvilinear coordinates of the point P will be given by the functions \\(u=u(x,y,z)\\), \\(v=v(x,y,z)\\), and \\(w=w(x,y,z)\\).

In cartesian coordinate, we have three plane surfaces:

(i) x surface or y-z surface bounded by y- and z-axes where x = 0. The direction of the surface (normal to this surface) is along x-axis and represented by \\(\hat{i}\\). That is why it is also called x-surface.

(ii) y surface or x-z surface bounded by x- and z-axes where y = 0. The direction of the surface (normal to this surface) is along y-axis and represented by \\(\hat{j}\\). That is why it is also called y-surface.

(iii) z surface or x-y surface bounded by x- and y-axes where z = 0. The direction of the surface (normal to this surface) is along z-axis and represented by \\(\hat{k}\\). That is why it is also called z-surface.

Conversely, we can also say that x-axis is the line of intersection of y- and z- surfaces, y-axis is the line of intersection of x- and z-surfaces and z-axis is the intersection of x- and y- surfaces.

Similarly, in curvilinear coordinate system, there are three (non-planar) coordinate surfaces: u surface \\((u=c_1)\\), v surface \\((v=c_2)\\) and w surface \\((w=c_3)\\). The intersection of any two surfaces gives the 3rd curve (not a straight line as in cartesian coordinate) as follows:

(i) u-curve is given by the intersection \\((v=c_2)\\) and \\((w=c_3)\\) surfaces.

(ii) v-curve is given by the intersection \\((u=c_1)\\) and \\((w=c_3)\\) surfaces.

(iii) w-curve is given by the intersection \\((u=c_1)\\) and \\((v=c_2)\\) surfaces.

The directions, i.e., the unit vectors, of these curves are given by the tangent to the curve at the given point. Therefore, the unit vectors are not constant in the curvilinear coordinate system. However, they are mutually perpendicular.

Let \\(\hat{e}_u\\), \\(\hat{e}_v\\) and \\(\hat{e}_w\\) be the unit vectors along u-, v-, and w-curves, then similar to cartesian coordinate system, the following properties hold good here also,

\\[
\hat{e}_u\cdot\hat{e}_u = \hat{e}_v\cdot\hat{e}_v = \hat{e}_w\cdot\hat{e}_w = 1
\\]

\\[
\hat{e}_u\cdot\hat{e}_v = \hat{e}_v\cdot\hat{e}_w = \hat{e}_w\cdot\hat{e}_u = 0
\\]

\\[
\hat{e}_u\times\hat{e}_u = \hat{e}_v\times\hat{e}_v = \hat{e}_w\times\hat{e}_w = 0
\\]

\\[
\hat{e}_u\times\hat{e}_v = \hat{e}_w,\quad \hat{e}_v\times\hat{e}_w = \hat{e}_u,\quad \hat{e}_w\times\hat{e}_u = \hat{e}_v
\\]

\\[
\hat{e}_v\times\hat{e}_u = -\hat{e}_w,\quad \hat{e}_w\times\hat{e}_v = -\hat{e}_u,\quad \hat{e}_u\times\hat{e}_w = -\hat{e}_v
\\]

**Scale factors:** In cartesian coordinates, all the coordinates of a point have the units of length. However, in curvilinear coordinates, some coordinates are angles. Therefore, to bring the similarities, three scale factors are introduced for three corresponding coordinates. They relate the differential lengths in the curvilinear coordinate system to the corresponding differential lengths in Cartesian coordinates. They are denoted and defined as follows:

\\[
h_1 = \left|\frac{\partial\vec{r}}{\partial u}\right|,\quad h_2 = \left|\frac{\partial\vec{r}}{\partial v}\right|,\quad h_3 = \left|\frac{\partial\vec{r}}{\partial w}\right|
\\]

where, \\(\vec{r} = x\hat{i}+y\hat{j}+z\hat{k}\\) is the position vector. Since \\((\hat{e}_u,\hat{e}_v,\hat{e}_w)\\) are the unit vectors of u-, v-, w-curves (directed along the tangent of the curve, \\(\partial\vec{r}/\partial u\\), \\(\partial\vec{r}/\partial v\\), \\(\partial\vec{r}/\partial w\\), respectively at the given point), we can write

\\[
\frac{\partial\vec{r}}{\partial u} = h_1\hat{e}_u,\quad \frac{\partial\vec{r}}{\partial v} = h_2\hat{e}_v,\quad \frac{\partial\vec{r}}{\partial w} = h_3\hat{e}_w
\\]

**Note:** For cartesian coordinates, \\(h_1=h_2=h_3=1\\). The line element is given by,

\\[
d\vec{r} = \frac{\partial\vec{r}}{\partial u}du + \frac{\partial\vec{r}}{\partial v}dv + \frac{\partial\vec{r}}{\partial w}dw \Rightarrow d\vec{r} = h_1\,du\,\hat{e}_u + h_2\,dv\,\hat{e}_v + h_3\,dw\,\hat{e}_w
\\]

The differential of an arc length is given by

\\[
ds^2 = d\vec{r}\cdot d\vec{r} = h_1^2(du)^2 + h_2^2(dv)^2 + h_3^2(dw)^2
\\]

The length elements along three coordinate axes are given by: \\(ds_1=h_1du\\), \\(ds_2=h_2dv\\) and \\(ds_3=h_3dw\\). The surface elements are given by \\(dA_1=ds_2ds_3=h_2h_3\,dv\,dw\\), \\(dA_2=ds_1ds_3=h_1h_3\,du\,dw\\), and \\(dA_3=ds_1ds_2=h_1h_2\,du\,dv\\). The volume element is given by

\\[
dV = ds_1ds_2ds_3 = h_1h_2h_3\,du\,dv\,dw
\\]

**Gradient, Divergence, Curl, and Laplacian in curvilinear coordinate system:**

**Gradient:** The gradient of the scalar function \\(\phi = \phi(u,v,w)\\) is given by,

\\[
\vec{\nabla}\phi = \frac{1}{h_1}\frac{\partial\phi}{\partial u}\hat{e}_u + \frac{1}{h_2}\frac{\partial\phi}{\partial v}\hat{e}_v + \frac{1}{h_3}\frac{\partial\phi}{\partial w}\hat{e}_w
\\]

The 'del' operator can be written as

\\[
\vec{\nabla} = \frac{1}{h_1}\frac{\partial}{\partial u}\hat{e}_u + \frac{1}{h_2}\frac{\partial}{\partial v}\hat{e}_v + \frac{1}{h_3}\frac{\partial}{\partial w}\hat{e}_w
\\]

Now, \\(\vec{\nabla}u = \dfrac{\hat{e}_u}{h_1}\\). Similarly, \\(\vec{\nabla}v = \dfrac{\hat{e}_v}{h_2}\\) and \\(\vec{\nabla}w = \dfrac{\hat{e}_w}{h_3}\\)

Therefore, the gradient of a scalar function can also be written as

\\[
\vec{\nabla}\phi = \frac{\partial\phi}{\partial u}\vec{\nabla}u + \frac{\partial\phi}{\partial v}\vec{\nabla}v + \frac{\partial\phi}{\partial w}\vec{\nabla}w
\\]

**Divergence:** The divergence of a vector quantity \\(\vec{f} = f_u\hat{e}_u + f_v\hat{e}_v + f_w\hat{e}_w\\) is given by

\\[
\vec{\nabla}\cdot\vec{f} = \frac{1}{h_1h_2h_3}\left[\frac{\partial}{\partial u}(h_2h_3f_u) + \frac{\partial}{\partial v}(h_1h_3f_v) + \frac{\partial}{\partial w}(h_1h_2f_w)\right]
\\]

**Curl:** The curl of a vector quantity \\(\vec{f} = f_u\hat{e}_u + f_v\hat{e}_v + f_w\hat{e}_w\\) is given by

\\[
\vec{\nabla}\times\vec{f} = \begin{vmatrix} \dfrac{\hat{e}_u}{h_2h_3} & \dfrac{\hat{e}_v}{h_1h_3} & \dfrac{\hat{e}_w}{h_1h_2} \\\\ \dfrac{\partial}{\partial u} & \dfrac{\partial}{\partial v} & \dfrac{\partial}{\partial w} \\\\ h_1f_u & h_2f_v & h_3f_w \end{vmatrix}
\\]

**Laplacian:** The Laplacian of a scalar function is the divergence of the gradient of the given scalar function.

Let us consider a scalar function \\(\phi = \phi(u,v,w)\\). The Laplacian of the function is given by

\\[
\nabla^2\phi = \vec{\nabla}\cdot(\vec{\nabla}\phi) = \frac{1}{h_1h_2h_3}\left[\frac{\partial}{\partial u}\left(\frac{h_2h_3}{h_1}\frac{\partial\phi}{\partial u}\right) + \frac{\partial}{\partial v}\left(\frac{h_1h_3}{h_2}\frac{\partial\phi}{\partial v}\right) + \frac{\partial}{\partial w}\left(\frac{h_1h_2}{h_3}\frac{\partial\phi}{\partial w}\right)\right]
\\]

Now, we will discuss the two curvilinear coordinate systems: Spherical Polar Coordinates and Cylindrical Coordinates.

**Spherical Polar Coordinates:** In spherical polar system, the location or position of a point in space is represented by three coordinates \\((r, \theta, \phi)\\), i.e., \\(u=r, v=\theta, w=\phi\\). Here, \\(r\\), called as radius, is the distance of the point from the origin, \\(\theta\\), called as polar angle, is the angle between \\(r\\) and z-axis, and \\(\phi\\), called as azimuthal angle, is the angle between projection of \\(r\\) on the x-y plane and x-axis. The ranges of these coordinates are given by, \\(r: 0-\infty\\), \\(\theta: 0-\pi\\) and \\(\phi: 0-2\pi\\).

From the figure, it is clear that \\(OM = r\cos\theta\\) and \\(OQ = r\sin\theta\\). Now the cartesian coordinates \\((x,y,z)\\) are related to the spherical polar coordinates as:

\\[
x = OR = OQ\cos\phi = r\sin\theta\cos\phi
\\]

\\[
y = QR = OQ\sin\phi = r\sin\theta\sin\phi
\\]

\\[
z = OM = r\cos\theta
\\]

Conversely, we can also write (after simplification), \\(r = (x^2+y^2+z^2)^{1/2}\\), \\(\phi = \tan^{-1}(y/x)\\) and \\(\theta = \tan^{-1}(\sqrt{x^2+y^2}/z)\\).

Now, we will find the scale factors in spherical polar coordinates. The position vector is given by:

\\[
\vec{r} = x\hat{i}+y\hat{j}+z\hat{k} = r\sin\theta\cos\phi\hat{i} + r\sin\theta\sin\phi\hat{j} + r\cos\theta\hat{k}
\\]

The three scale factors in spherical coordinates are given by:

\\[
h_1 = \left|\frac{\partial\vec{r}}{\partial r}\right| = \sqrt{\sin^2\theta\cos^2\phi+\sin^2\theta\sin^2\phi+\cos^2\theta} = 1
\\]

\\[
h_2 = \left|\frac{\partial\vec{r}}{\partial\theta}\right| = \sqrt{r^2\cos^2\theta\cos^2\phi+r^2\cos^2\theta\sin^2\phi+r^2\sin^2\theta} = r
\\]

\\[
h_3 = \left|\frac{\partial\vec{r}}{\partial\phi}\right| = \sqrt{r^2\sin^2\theta\sin^2\phi+r^2\sin^2\theta\cos^2\phi} = r\sin\theta
\\]
The three length elements are given by: \\(ds\_1 = dr\\), \\(ds\_2 = rd\theta\\), \\(ds\_3 = r\sin\theta d\phi\\). Thus the line element can be written as \\(d\vec{s} = dr \hat{e}\_r + rd\theta \hat{e}\_\theta + r\sin\theta d\phi \hat{e}\_\phi\\). The surface element on a constant \\(r\\) surface is \\(dA\_r = ds\_2ds\_3 = r^2\sin\theta d\theta d\phi\\). The other two surface elements are \\(dA\_\theta = r\sin\theta dr d\phi\\) and \\(dA\_\phi = r dr d\theta\\). The volume element is given by, \\(dV = ds\_1ds\_2ds\_3 = r^2\sin\theta dr d\theta d\phi\\).

Now, we will find the three unit vectors in terms of \\(\hat{i}\\), \\(\hat{j}\\), \\(\hat{k}\\). We know, \\(\partial\vec{r}/\partial u = h_1\hat{e}_u\\), \\(\partial\vec{r}/\partial v = h_2\hat{e}_v\\) and \\(\partial\vec{r}/\partial w = h_3\hat{e}_w\\). Thus, for spherical coordinates,

\\[
\hat{e}_r = \frac{\partial\vec{r}}{\partial r} = \sin\theta\cos\phi\hat{i} + \sin\theta\sin\phi\hat{j} + \cos\theta\hat{k}
\\]

\\[
\hat{e}_\theta = \frac{1}{r}\frac{\partial\vec{r}}{\partial\theta} = \cos\theta\cos\phi\hat{i} + \cos\theta\sin\phi\hat{j} - \sin\theta\hat{k}
\\]

\\[
\hat{e}_\phi = \frac{1}{r\sin\theta}\frac{\partial\vec{r}}{\partial\phi} = -\sin\phi\hat{i} + \cos\phi\hat{j}
\\]

We can easily show that \\(\hat{e}\_r\cdot\hat{e}\_\theta = \hat{e}\_\theta\cdot\hat{e}\_\phi = \hat{e}\_\phi\cdot\hat{e}\_r = 0\\) which confirms that they are mutually perpendicular and the system is orthogonal. The gradient, divergence, curl, and laplacian in spherical coordinates are given by,

**Gradient:**

\\[
\vec{\nabla}f = \frac{\partial f}{\partial r}\hat{e}\_r + \frac{1}{r}\frac{\partial f}{\partial\theta}\hat{e}\_\theta + \frac{1}{r\sin\theta}\frac{\partial f}{\partial\phi}\hat{e}\_\phi
\\]

**Divergence:**

\\[
\vec{\nabla}\cdot\vec{A} = \frac{1}{r^2}\frac{\partial}{\partial r}(r^2A_r) + \frac{1}{r\sin\theta}\frac{\partial}{\partial\theta}(\sin\theta A_\theta) + \frac{1}{r\sin\theta}\frac{\partial A_\phi}{\partial\phi}
\\]

**Curl:**

\\[
\vec{\nabla}\times\vec{A} = \frac{1}{r^2\sin\theta}\begin{vmatrix} \hat{e}\_r & r\hat{e}\_\theta & r\sin\theta\hat{e}\_\phi \\\\ \frac{\partial}{\partial r} & \frac{\partial}{\partial\theta} & \frac{\partial}{\partial\phi} \\\\ A_r & rA_\theta & r\sin\theta A_\phi \end{vmatrix}
\\]

**Laplacian:**

\\[
\nabla^2f = \frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial f}{\partial r}\right) + \frac{1}{r^2\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial f}{\partial\theta}\right) + \frac{1}{r^2\sin^2\theta}\frac{\partial^2 f}{\partial\phi^2}
\\]

**Example 2.1:** Express the vector function \\(\vec{f} = 2x\hat{i} + yz\hat{j} + z\hat{k}\\) in spherical polar coordinates.

**Solution:** The vector function is given by,
\\[
\vec{f} = 2x\hat{i}+yz\hat{j}+z\hat{k} = 2r\sin\theta\cos\phi\hat{i} + r^2\sin\theta\cos\theta\sin\phi\hat{j} + r\cos\theta\hat{k}
\\]

Let \\(\vec{f} = f_r\hat{e}\_r + f_\theta\hat{e}\_\theta + f_\phi\hat{e}\_\phi\\) be the function in a spherical coordinate system. The three components of the function are given by
\\[
f_r = \vec{f}\cdot\hat{e}_r = 2r\sin^2\theta\cos^2\phi + r^2\sin^2\theta\sin^2\phi\cos\theta + r\cos^2\theta
\\]

\\[
f_\theta = \vec{f}\cdot\hat{e}_\theta = 2r\sin\theta\cos\theta\cos^2\phi + r^2\sin\theta\cos^2\theta\sin^2\phi - r\sin\theta\cos\theta
\\]

\\[
f_\phi = \vec{f}\cdot\hat{e}_\phi = -2r\sin\theta\sin\phi\cos\phi + r^2\sin\theta\cos\theta\sin\phi\cos\phi
\\]

**Cylindrical Coordinate:** In a cylindrical system, the location or position of a point in space is represented by three coordinates \\((\rho, \phi, z)\\), i.e., \\(u=\rho, v=\phi, w=z\\). Here, \\(\rho\\), called as radius, is the distance of the point from the z-axis, \\(\phi\\), called azimuthal angle, is the angle between projection of \\(\rho\\) on the x-y plane and x-axis and \\(z\\), called height, is the height of the point from x-y plane. The ranges of these coordinates are given by, \\(\rho: 0-\infty\\), \\(\phi: 0-2\pi\\) and \\(z: 0-\infty\\).

**Note:** Here, the radius is drawn from the z-axis and the projection of \\(\rho\\) the x-y plane is equal to \\(\rho\\), since both are parallel lines. On the other hand, in a spherical system, the radius is drawn from the origin and the projection of \\(r\\) on x-y plane is equal to \\(r\sin\theta\\). The azimuthal angle \\(\phi\\) is the same in both the systems. The third coordinate \\(z\\) is the same as the z-coordinate in the cartesian system.

From the figure, we can easily write the cartesian coordinates \\((x, y, z)\\) in terms of cylindrical coordinates \\((\rho, \phi, z)\\) as, \\(x = \rho\cos\phi\\), \\(y = \rho\sin\phi\\), \\(z = z\\). Conversely, we can also write, \\(\rho = (x^2+y^2)^{1/2}\\), \\(\phi = \tan^{-1}(y/x)\\) and \\(z = z\\).

The position vector is given by,

\\[
\vec{r} = x\hat{i}+y\hat{j}+z\hat{k} = \rho\cos\phi\hat{i}+\rho\sin\phi\hat{j}+z\hat{k}
\\]

The three scale factors are given by,

\\[
h_1 = \left|\frac{\partial\vec{r}}{\partial\rho}\right| = \sqrt{\cos^2\phi+\sin^2\phi} = 1
\\]

\\[
h_2 = \left|\frac{\partial\vec{r}}{\partial\phi}\right| = \sqrt{\rho^2\sin^2\phi+\rho^2\cos^2\phi} = \rho
\\]

\\[
h_3 = \left|\frac{\partial\vec{r}}{\partial z}\right| = 1
\\]

The three length elements are given by: \\(ds_1=d\rho\\), \\(ds_2=\rho d\phi\\), \\(ds_3=dz\\). Thus the line element can be written as \\(d\vec{s} = d\rho \hat{e}\_\rho + \rho d\phi \hat{e}\_\phi + dz \hat{e}\_z\\). The surface element on a constant \\(\rho\\) surface is \\(dA_\rho = ds_2ds_3 = \rho d\phi dz\\). The other two surface elements are \\(dA_\phi = dr dz\\) and \\(dA_z = \rho d\rho d\phi\\). The volume element is given by, \\(dV = ds_1ds_2ds_3 = \rho d\rho d\phi dz\\).

Now, we will find the three unit vectors in terms of \\(\hat{i}\\), \\(\hat{j}\\), \\(\hat{k}\\). Thus, for cylindrical coordinates,

\\[
\hat{e}_\rho = \frac{\partial\vec{r}}{\partial\rho} = \cos\phi\hat{i}+\sin\phi\hat{j}
\\]

\\[
\hat{e}_\phi = \frac{1}{\rho}\frac{\partial\vec{r}}{\partial\phi} = -\sin\phi\hat{i}+\cos\phi\hat{j}
\\]

\\[
\hat{e}_z = \frac{\partial\vec{r}}{\partial z} = \hat{k}
\\]
We can easily show that \\(\hat{e}\_\rho\cdot\hat{e}\_\phi = \hat{e}\_\phi\cdot\hat{e}\_z = \hat{e}\_z\cdot\hat{e}\_\rho = 0\\) which confirms that they are mutually perpendicular and the system is orthogonal. The gradient, divergence, curl, and laplacian in cylindrical coordinates are given by,

**Gradient:**

\\[
\vec{\nabla}f = \frac{\partial f}{\partial\rho}\hat{e}\_\rho + \frac{1}{\rho}\frac{\partial f}{\partial\phi}\hat{e}\_\phi + \frac{\partial f}{\partial z}\hat{e}\_z
\\]

**Divergence:**

\\[
\vec{\nabla}\cdot\vec{A} = \frac{1}{\rho}\frac{\partial}{\partial\rho}(\rho A_\rho) + \frac{1}{\rho}\frac{\partial}{\partial\phi}(A_\phi) + \frac{\partial}{\partial z}(A_z)
\\]

**Curl:**

\\[
\vec{\nabla}\times\vec{A} = \frac{1}{\rho}\begin{vmatrix} \hat{e}\_\rho & \rho\hat{e}\_\phi & \hat{e}\_z \\\\ \frac{\partial}{\partial\rho} & \frac{\partial}{\partial\phi} & \frac{\partial}{\partial z} \\\\ A_\rho & \rho A_\phi & A_z \end{vmatrix}
\\]

**Laplacian:**

\\[
\nabla^2f = \frac{1}{\rho}\frac{\partial}{\partial\rho}\left(\rho\frac{\partial f}{\partial\rho}\right) + \frac{1}{\rho^2}\frac{\partial^2 f}{\partial\phi^2} + \frac{\partial^2 f}{\partial z^2}
\\]

**Example 2.2:** Express \\(2y\hat{i}+z\hat{j}-x\hat{k}\\) in cylindrical coordinates.

**Solution:** The vector function is given by,

\\[
\vec{F} = 2y\hat{i}+z\hat{j}-x\hat{k} = 2\rho\sin\phi\hat{i} + z\hat{j} - \rho\cos\phi\hat{k}
\\]

Let \\(\vec{F} = F_\rho\hat{e}\_\rho + F_\phi\hat{e}\_\phi + F_z\hat{e}\_z\\) be the function in the cylindrical coordinate system. The components of the vector are given by,
\\[
F_\rho = \vec{F}\cdot\hat{e}_\rho = 2\rho\sin\phi\cos\phi + z\sin\phi
\\]

\\[
F_\phi = \vec{F}\cdot\hat{e}_\phi = -2\rho\sin^2\phi + z\cos\phi
\\]

\\[
F_z = \vec{F}\cdot\hat{e}_z = -\rho\cos\phi
\\]
<button class="print-btn" data-html2canvas-ignore="true" onclick="exportUnit('mp-unit-2','Curvilinear-Coordinates-Notes.pdf')">Export this unit to PDF</button>
</details>

<details class="unit-block" id="mp-unit-3">
<summary>Unit 3: Dirac Delta Function</summary>
<p><em></em></p>

 **Dirac Delta Function**

Dirac delta function, denoted by \\(\delta(x)\\), is a mathematical construct used to represent a localized function or physical entity with a value that is zero everywhere except at a specific point. It is not a function in the traditional sense. Mathematically it is expressed as

\\[
\delta(x) = 0, \text{ if } x \ne 0
\\]

\\[
= 1, \text{ if } x = 0
\\]

The integral of the Dirac delta function over the entire real domain is 1, which is expressed below:

\\[
\int_{-\infty}^{+\infty}\delta(x)\,dx = 1
\\]

**Applications:**

1. **Point Sources:** It is used to model idealized point charges, masses, or other localized effects in physical systems.
2. **Signal Processing:** It represents an ideal impulse, making it a key tool for analyzing system responses.

**Properties of Delta Function:**

1. \\(\displaystyle\int_{-\infty}^{\infty} f(x)\delta(x)\,dx = f(0)\\)

2. \\(\displaystyle\int_{-\infty}^{\infty} f(x)\delta(x-a)\,dx = f(a)\\)

3. \\(\displaystyle\int_{-\infty}^{\infty} f(x)\delta'(x-a)\,dx = -f'(a)\\), here \\(f'(x) = \dfrac{d}{dx}f(x)\\)

4. \\(\delta(-x) = \delta(x)\\)

5. \\(x\delta(x) = 0\\)

6. \\(\delta(ax) = \dfrac{1}{|a|}\delta(x)\\)

7. \\(\displaystyle\int \delta(a-x)\delta(x-b)\,dx = \delta(a-b)\\)

8. \\(\delta(x-a) = \delta(a-x)\\)

9. \\(\delta(x^2-a^2) = \dfrac{1}{2|a|}\left[\delta(x-a)+\delta(x+a)\right]\\)

**Proof:**

**1.** \\(\displaystyle\int_{-\infty}^{\infty} f(x)\delta(x)\,dx = f(0)\\)

The Dirac delta function is zero everywhere except at \\(x=0\\). Therefore, in the integral, only the value of \\(f(x)\\) at \\(x=0\\), i.e. \\(f(0)\\), which is constant, contributes. Therefore,

\\[
\int_{-\infty}^{\infty} f(x)\delta(x)\,dx = \int_{-\infty}^{\infty} f(0)\delta(x)\,dx = f(0)\int_{-\infty}^{\infty}\delta(x)\,dx = f(0)
\\]

**2.** \\(\displaystyle\int_{-\infty}^{\infty} f(x)\delta(x-a)\,dx = f(a)\\)

Using the same logic we can prove this property also as mentioned below:

\\[
\int_{-\infty}^{\infty} f(x)\delta(x-a)\,dx = \int_{-\infty}^{\infty} f(a)\delta(x-a)\,dx = f(a)\int_{-\infty}^{\infty}\delta(x-a)\,dx = f(a)
\\]

**3.** \\(\displaystyle\int_{-\infty}^{\infty} f(x)\delta'(x-a)\,dx = -f'(a)\\)

We can integrate the LHS using integration by parts,

\\[
\int_{-\infty}^{\infty} f(x)\delta'(x-a)\,dx = \left[f(x)\int\delta(x)\,dx\right]\_{-\infty}^{+\infty} - \int_{-\infty}^{+\infty} f'(x)\delta(x)\,dx = 0 - \int_{-\infty}^{+\infty} f'(a)\delta(x)\,dx = -f'(a)
\\]

**4.** \\(\delta(-x) = \delta(x)\\)

Let us evaluate the following integral: \\(\displaystyle\int_{-\infty}^{\infty} f(x)\delta(-x)\,dx\\)

Let \\(x=-u \Rightarrow dx=-du\\)

\\[
\int_{-\infty}^{\infty} f(x)\delta(-x)\,dx = \int_{\infty}^{-\infty} f(-u)\delta(u)(-du) = \int_{-\infty}^{\infty} f(-u)\delta(u)\,du = f(0)\int_{-\infty}^{\infty}\delta(u)\,du = f(0)
\\]

But, from property 1, \\(\displaystyle\int_{-\infty}^{\infty} f(x)\delta(x)\,dx = f(0)\\)

Comparing the two, we can conclude that \\(\delta(-x) = \delta(x)\\).

**5.** \\(x\delta(x) = 0\\)

From property 1, \\(\displaystyle\int_{-\infty}^{\infty} f(x)\delta(x)\,dx = f(0)\\). Let \\(f(x) = x\\) which gives \\(\displaystyle\int_{-\infty}^{\infty} x\delta(x)\,dx = 0\\). Therefore \\(x\delta(x) = 0\\)

**6.** \\(\delta(ax) = \dfrac{1}{|a|}\delta(x)\\)

Let us consider the integral \\(\displaystyle\int_{-\infty}^{\infty} f(x)\delta(ax)\,dx\\). Let \\(ax=u \Rightarrow dx = \dfrac{1}{|a|}du\\). This gives,

\\[
\int_{-\infty}^{\infty} f(x)\delta(ax)\,dx = \frac{1}{|a|}\int_{-\infty}^{\infty} f(u/a)\delta(u)\,du = \frac{1}{|a|}f(0) = \frac{1}{|a|}\int_{-\infty}^{\infty} f(x)\delta(x)\,dx
\\]

Hence, \\(\delta(ax) = \dfrac{1}{|a|}\delta(x)\\)

**7.** \\(\displaystyle\int_{-\infty}^{+\infty} \delta(a-x)\delta(x-b)\,dx = \delta(a-b)\\)

Proof: From property 2, \\(\displaystyle\int_{-\infty}^{\infty} f(x)\delta(x-b)\,dx = f(b)\\)

Let, \\(f(x) = \delta(a-x)\\), therefore,

\\[
\int_{-\infty}^{+\infty} \delta(a-x)\delta(x-b)\,dx = \delta(a-b)
\\]

**8.** \\(\delta(x-a) = \delta(a-x)\\)

Proof: From property 4, we have, \\(\delta(-x) = \delta(x)\\). Therefore,

\\[
\delta(x-a) = \delta\{-(a-x)\} = \delta(a-x)
\\]

**9.** \\(\delta(x^2-a^2) = \dfrac{1}{2|a|}\left[\delta(x-a)+\delta(x+a)\right]\\)

Proof: Using the following property of delta function (Proof is given in appendix)

\\[
\delta[g(x)h(x)] = \frac{1}{|g(x)|}\delta[h(x)] + \frac{1}{|h(x)|}\delta[g(x)]
\\]

we can write

\\[
\delta(x^2-a^2) = \delta[(x-a)(x+a)] = \frac{1}{|x+a|}\delta(x-a) + \frac{1}{|x-a|}\delta(x+a)
\\]

\\[
\int_{-\infty}^{+\infty} f(x)\delta(x^2-a^2)\,dx = \int_{-\infty}^{+\infty}\frac{1}{|x+a|}f(x)\delta(x-a)\,dx + \int_{-\infty}^{+\infty}\frac{1}{|x-a|}f(x)\delta(x+a)\,dx
\\]

\\[
= \frac{1}{|2a|}f(a) + \frac{1}{|2a|}f(-a)
\\]

\\[
= \frac{1}{2|a|}\int_{-\infty}^{+\infty}f(x)\delta(x-a)\,dx + \frac{1}{2|a|}\int_{-\infty}^{+\infty}f(x)\delta(x+a)\,dx
\\]

\\[
\delta(x^2-a^2) = \frac{1}{2|a|}\left[\delta(x-a)+\delta(x+a)\right]
\\]

**Appendix: Proof of product property.**

First we will prove the following property:

\\[
\delta[f(x)] = \sum_i \frac{1}{|f'(x_i)|}\delta(x-x_i)
\\]

The function \\(f(x)\\) can be expanded around the root \\(x = x_i\\) using the Taylor's series as \\(f(x) = (x-x_i)f'(x_i)\\), ignoring the higher order terms. This gives

\\[
\delta[f(x)] = \delta[(x-x_i)f'(x_i)] = \frac{1}{|f'(x_i)|}\delta(x-x_i)
\\]

using property 6. If the function \\(f(x)\\) has multiple roots, then it can be expanded around each root. Therefore, we can write,

\\[
\delta[f(x)] = \sum_i \frac{1}{|f'(x_i)|}\delta(x-x_i)
\\]

Let \\(f(x) = g(x)h(x)\\). Now using the above property, we can write that

\\[
\delta[g(x)h(x)] = \frac{1}{|g(x)|}\delta[h(x)] + \frac{1}{|h(x)|}\delta[g(x)]
\\]
<button class="print-btn" data-html2canvas-ignore="true" onclick="exportUnit('mp-unit-3','ODE-Notes.pdf')">Export this unit to PDF</button>
</details>

</details>

<details>
<summary><strong>Mechanics</strong></summary>

<details class="unit-block" id="mech-unit-1">
<summary>Unit 1</summary>
<p><em>Write your notes here.</em></p>
<button class="print-btn" data-html2canvas-ignore="true" onclick="exportUnit('mech-unit-1','Mechanics-Unit1-Notes.pdf')">Export this unit to PDF</button>
</details>

<!-- Add more units for Mechanics the same way, copying one unit-block and changing its id, heading, and button filename. -->

</details>

<!-- Add more papers for 1st Semester by copying an entire <details>...</details> block above and changing the paper name and its unit ids. -->

</div>

<div class="tab-content" id="sem2">
<p><em>No papers added yet for 2nd Semester. Add one by copying a paper &lt;details&gt; block from another semester and updating the names/ids.</em></p>
</div>

<div class="tab-content" id="sem3">

<details open>
<summary><strong>Waves and Optics</strong></summary>

<details class="unit-block" id="wo-unit-1">
<summary>Unit 1: Oscillations</summary>
<p><em>Write your notes here.</em></p>
<button class="print-btn" data-html2canvas-ignore="true" onclick="exportUnit('wo-unit-1','Oscillations-Notes.pdf')">Export this unit to PDF</button>
</details>

<details class="unit-block" id="wo-unit-2">
<summary>Unit 2: Wave Motion</summary>
<p><em>Write your notes here.</em></p>
<button class="print-btn" data-html2canvas-ignore="true" onclick="exportUnit('wo-unit-2','Wave-Motion-Notes.pdf')">Export this unit to PDF</button>
</details>

<details class="unit-block" id="wo-unit-3">
<summary>Unit 3: Interference</summary>
<p><em>Write your notes here.</em></p>
<button class="print-btn" data-html2canvas-ignore="true" onclick="exportUnit('wo-unit-3','Interference-Notes.pdf')">Export this unit to PDF</button>
</details>

<details class="unit-block" id="wo-unit-4">
<summary>Unit 4: Diffraction</summary>
<p><em>Write your notes here.</em></p>
<button class="print-btn" data-html2canvas-ignore="true" onclick="exportUnit('wo-unit-4','Diffraction-Notes.pdf')">Export this unit to PDF</button>
</details>

<details class="unit-block" id="wo-unit-5">
<summary>Unit 5: Polarization</summary>
<p><em>Write your notes here.</em></p>
<button class="print-btn" data-html2canvas-ignore="true" onclick="exportUnit('wo-unit-5','Polarization-Notes.pdf')">Export this unit to PDF</button>
</details>

</details>

<details>
<summary><strong>Electromagnetic Theory</strong></summary>

<details class="unit-block" id="emt-unit-1">
<summary>Unit 1</summary>
<p><em>Write your notes here.</em></p>
<button class="print-btn" data-html2canvas-ignore="true" onclick="exportUnit('emt-unit-1','EMT-Unit1-Notes.pdf')">Export this unit to PDF</button>
</details>

<!-- Add more units for Electromagnetic Theory the same way. -->

</details>

</div>

<div class="tab-content" id="sem4">
<p><em>No papers added yet for 4th Semester. Add one by copying a paper &lt;details&gt; block from another semester and updating the names/ids.</em></p>
</div>

<div class="tab-content" id="sem5">

<details open>
<summary><strong>Atomic & Molecular Physics</strong></summary>

<details class="unit-block" id="am-unit-1">
<summary>Unit 1: Atomic Structure</summary>
<p><em></em></p>
 
 **Introduction to Atomic Models**

The word "atom" is derived from the Greek word *atomos*, meaning indivisible. The idea of atoms was introduced philosophically by Democritus. The scientific development of atomic theory began with Dalton.

The historical development of atomic models is

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">Dalton → Thomson → Rutherford → Bohr</div>

Each model was developed to explain experimental observations that could not be explained by the earlier model.

**Dalton's Atomic Model**

John Dalton proposed his atomic theory in the early nineteenth century.

According to Dalton:

1. All matter is composed of extremely small particles called atoms.
2. Atoms of the same element are identical in mass and chemical properties.
3. Atoms of different elements have different masses and properties.
4. Atoms combine in simple whole-number ratios to form compounds.
5. In a chemical reaction, atoms are neither created nor destroyed; they are merely rearranged.

Thus, Dalton considered the atom to be a small, solid and indivisible particle.

**Limitations**

Dalton's model was unable to explain the internal structure of the atom.

1. The discovery of the electron showed that the atom is divisible.
2. The discovery of isotopes showed that atoms of the same element need not have identical masses, e.g. \\(^1H\\), \\(^2H\\), \\(^3H\\).
3. Nuclear reactions showed that atoms can be transformed into atoms of other elements.

**J. J. Thomson's Atomic Model**

After the discovery of the electron by J. J. Thomson in 1897, Thomson proposed an atomic model in 1904.

According to this model, the atom is a sphere of uniformly distributed positive charge in which negatively charged electrons are embedded.

It is commonly known as the plum-pudding model.

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">Atom = uniform positive charge + embedded electrons</div>

The total positive charge is equal to the total negative charge, so the atom is electrically neutral.

**Limitations**

Thomson's model could not explain the results of Rutherford's α-particle scattering experiment.

According to Thomson's model, the positive charge was spread throughout the atom. Therefore, only small deflections of α-particles were expected.

However, Rutherford observed that a few α-particles were deflected through very large angles and some were scattered backward.

Hence, Thomson's model was rejected.

**Rutherford's α-Particle Scattering Experiment**

Rutherford, along with Geiger and Marsden, performed the α-particle scattering experiment around 1909.

In the experiment, a beam of energetic α-particles was directed towards a very thin gold foil. A zinc sulphide (ZnS) fluorescent screen was used to detect the scattered α-particles.

The α-particle is a helium nucleus:

\\[
^4_2\text{He}^{2+},
\\]

with charge

\\[
q_\alpha = +2e.
\\]

Gold was chosen because it can be obtained in an extremely thin foil.

**Observations of Rutherford's Experiment**

The main observations were:

1. Most α-particles passed through the foil without any appreciable deflection.
2. A small fraction of α-particles were deflected through small angles.
3. A very small number of α-particles were deflected through large angles, and a few were scattered backward.

The large-angle scattering was particularly significant because it could not be explained by Thomson's model.

**Conclusions of Rutherford's Experiment**

Rutherford concluded that:

1. Most of the volume of an atom is empty space.
2. Almost all the positive charge of the atom is concentrated in a very small central region called the nucleus.
3. Almost the entire mass of the atom is concentrated in the nucleus.
4. The nucleus is extremely small compared with the size of the atom.

The approximate sizes are

\\[
R_{atom} \sim 10^{-10}\text{ m}, \qquad R_{nucleus} \sim 10^{-15}\text{ m}.
\\]

Therefore,

\\[
\frac{R_{nucleus}}{R_{atom}} \sim 10^{-5}.
\\]

Thus, the nucleus occupies only a very small fraction of the atomic volume.

**Rutherford's Nuclear Model**

On the basis of the scattering experiment, Rutherford proposed the nuclear model of the atom in 1911.

According to Rutherford:

1. The atom contains a very small, dense and positively charged nucleus at its centre.
2. Almost the entire mass of the atom is concentrated in the nucleus.
3. Electrons revolve around the nucleus.
4. The electrostatic attraction between the nucleus and electrons provides the centripetal force for their orbital motion.
5. A neutral atom contains equal positive and negative charges.

For an atom of atomic number \\(Z\\), the nuclear charge is

\\[
Q_{nucleus} = +Ze.
\\]

For an electron revolving at a distance \\(r\\) from the nucleus, the electrostatic force is

\\[
F_e = \frac{1}{4\pi\epsilon_0}\frac{Ze^2}{r^2}.
\\]

This provides the centripetal force:

\\[
\frac{mv^2}{r} = \frac{1}{4\pi\epsilon_0}\frac{Ze^2}{r^2}.
\\]

Hence,

\\[
mv^2 = \frac{1}{4\pi\epsilon_0}\frac{Ze^2}{r}.
\\]

**Significance of Rutherford's Model**

Rutherford's experiment and nuclear model were important because they established that:

1. The atom has a central nucleus.
2. Most of the atomic volume is empty space.
3. Positive charge is concentrated in the nucleus.
4. Almost the entire atomic mass is concentrated in the nucleus.

The experiment therefore replaced the Thomson model with the nuclear model and provided the foundation for the development of the Bohr model.

**Limitations of Rutherford's Atomic Model**

Rutherford's model could not explain some fundamental properties of atoms.

1. **Atomic stability:** According to classical electrodynamics, an accelerating electron should continuously radiate energy. Hence, the electron should lose energy and spiral into the nucleus.

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">Energy loss → r ↓ → electron falls into nucleus</div>

Thus, the atom should be unstable according to classical physics.

2. **Atomic spectra:** Rutherford's model could not explain the discrete line spectra of atoms.
3. **Allowed orbits:** The model provided no explanation for why only certain orbits or energies should be allowed.
4. **Electronic arrangement:** It did not explain the distribution and energy arrangement of electrons around the nucleus.

These limitations indicated that classical physics was insufficient to describe the atom and led to the development of the Bohr atomic model.

**Summary**

The development of atomic models may be summarized as

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">Dalton → Thomson → Rutherford → Bohr</div>

| Model | Main Idea | Main Limitation |
|---|---|---|
| Dalton | Atom is an indivisible particle | Discovery of subatomic particles and isotopes |
| Thomson | Electrons embedded in positive charge | Could not explain α-particle scattering |
| Rutherford | Small positive nucleus with electrons around it | Could not explain atomic stability and line spectra |
| Bohr | Quantized electron orbits | To be discussed later |

The major difficulty with Rutherford's atomic model was the stability of the atom. According to classical electrodynamics, an electron revolving around the nucleus is an accelerating charge and should continuously radiate energy. Consequently, it should lose energy and spiral into the nucleus.

To overcome this difficulty, Bohr introduced the concept of quantized stationary orbits. This condition can be understood using de Broglie's matter-wave hypothesis and the condition for a stationary wave.

**de Broglie Matter Wave**

According to de Broglie's hypothesis, a moving particle of momentum \\(p\\) is associated with a matter wave of wavelength

\\[
\lambda = \frac{h}{p}.
\\]

For an electron of mass \\(m\\) moving with velocity \\(v\\),

\\[
p = mv,
\\]

and hence

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
\lambda = \frac{h}{mv}
\\]

</div>

**Stationary-Wave Condition**

Consider an electron moving in a circular orbit of radius \\(r\\). For the electron wave to form a stable stationary wave around the orbit, the circumference of the orbit must contain an integral number of wavelengths.

Therefore,

\\[
2\pi r = n\lambda
\\]

where

\\[
n = 1, 2, 3, \ldots
\\]

is the principal quantum number.

Substituting the de Broglie wavelength,

\\[
2\pi r = n\frac{h}{mv}.
\\]

Therefore,

\\[
2\pi mvr = nh.
\\]

Dividing by \\(2\pi\\),

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
mvr = n\frac{h}{2\pi}
\\]

</div>

Since the orbital angular momentum of the electron is

\\[
L = mvr,
\\]

we obtain

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
L = n\frac{h}{2\pi} = n\hbar
\\]

</div>

where

\\[
\hbar = \frac{h}{2\pi}.
\\]

Thus, the angular momentum of the electron is quantized and can have only discrete values:

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
L = \hbar, 2\hbar, 3\hbar, \ldots
\\]

</div>

**Physical Meaning**

The condition

\\[
2\pi r = n\lambda
\\]

means that the electron wave fits exactly around the circumference of the orbit. After one complete revolution, the wave reproduces itself and forms a stationary standing wave.

For example,

\\[
n=1: \quad 2\pi r = \lambda
\\]

\\[
n=2: \quad 2\pi r = 2\lambda
\\]

\\[
n=3: \quad 2\pi r = 3\lambda
\\]

If the circumference does not contain an integral number of wavelengths, a stable stationary wave cannot be formed.

Therefore,

\\[
2\pi r = n\lambda \iff mvr = n\hbar
\\]

is the wave-mechanical interpretation of Bohr's quantization condition.

**Important Result**

The important relations to remember are

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
\lambda = \frac{h}{mv}
\\]

</div>

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
2\pi r = n\lambda
\\]

</div>

and hence

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
mvr = n\frac{h}{2\pi} = n\hbar
\\]

</div>

Thus, the angular momentum of an electron in an allowed Bohr orbit is an integral multiple of \\(\hbar\\).

**Bohr's Atomic Model**

Rutherford's nuclear model established the existence of the nucleus but could not explain the stability of the atom and the discrete line spectra. In 1913, Niels Bohr proposed a new atomic model by introducing quantum conditions into Rutherford's model.

For a hydrogen atom, an electron of charge \\(-e\\) and mass \\(m\\) revolves about a proton of charge \\(+e\\).

**Bohr's Postulates**

Bohr's atomic model is based on the following postulates:
1. **Stationary orbits:** An electron can revolve around the nucleus only in certain permitted circular orbits called stationary orbits. While moving in a stationary orbit, the electron does not radiate energy.

2. **Quantization of angular momentum:** The angular momentum of the electron is quantized according to

\\[
mvr = n\frac{h}{2\pi} = n\hbar,
\\]

where

\\[
n = 1, 2, 3, \ldots
\\]

is the principal quantum number.

3. **Emission or absorption of radiation:** Radiation is emitted or absorbed only when an electron jumps between two stationary orbits. The frequency of radiation is given by

\\[
h\nu = |E_i - E_f|.
\\]

For emission,

\\[
h\nu = E_i - E_f, \qquad E_i > E_f.
\\]

**Velocity of the Electron in the nth Orbit**

Consider an electron revolving around the proton in a circular orbit of radius \\(r\\) with velocity \\(v\\).

The electrostatic attraction between the proton and electron provides the required centripetal force. Therefore,

\\[
\frac{mv^2}{r} = \frac{1}{4\pi\epsilon_0}\frac{e^2}{r^2}.
\\]

Hence,

\\[
mv^2 = \frac{e^2}{4\pi\epsilon_0 r}. \qquad (1)
\\]

From Bohr's quantization condition,

\\[
mvr = n\hbar. \qquad (2)
\\]

Therefore,

\\[
r = \frac{n\hbar}{mv}. \qquad (3)
\\]

Substituting equation (3) in equation (1),

\\[
mv^2 = \frac{e^2mv}{4\pi\epsilon_0 n\hbar}.
\\]

Cancelling \\(mv\\) from both sides,

\\[
v = \frac{e^2}{4\pi\epsilon_0 n\hbar}.
\\]

Thus,

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
v_n = \frac{e^2}{4\pi\epsilon_0\hbar}\frac{1}{n}
\\]

</div>

Since \\(\hbar = \dfrac{h}{2\pi}\\), we can also write

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
v_n = \frac{e^2}{2\epsilon_0 h}\frac{1}{n}
\\]

</div>

For the first orbit, \\(n=1\\),

\\[
v_1 \approx 2.18 \times 10^6 \text{ m s}^{-1}.
\\]

Therefore,

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
v_n = \frac{2.18 \times 10^6 \text{ m s}^{-1}}{n}
\\]

</div>

Hence,

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
v_n \propto \frac{1}{n}
\\]

</div>

The velocity of the electron decreases as the principal quantum number increases.

**Radius of the nth Orbit**

From Bohr's quantization condition,

\\[
mvr = n\hbar,
\\]

we have

\\[
r = \frac{n\hbar}{mv}.
\\]

Substituting

\\[
v = \frac{e^2}{4\pi\epsilon_0 n\hbar},
\\]

we obtain

\\[
r_n = \frac{n\hbar}{m}\frac{4\pi\epsilon_0 n\hbar}{e^2}.
\\]

Therefore,

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
r_n = \frac{4\pi\epsilon_0\hbar^2}{me^2}n^2
\\]

</div>

The quantity

\\[
a_0 = \frac{4\pi\epsilon_0\hbar^2}{me^2}
\\]

is called the **Bohr radius**. Its numerical value is

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
a_0 = 5.29 \times 10^{-11} \text{ m}
\\]

</div>

Therefore,

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
r_n = a_0 n^2
\\]

</div>

or

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
r_n = 5.29 \times 10^{-11} n^2 \text{ m}
\\]

</div>

For the first orbit,

\\[
r_1 = a_0 = 5.29 \times 10^{-11} \text{ m}.
\\]

Hence,

\\[
r_1 : r_2 : r_3 : \cdots = 1 : 4 : 9 : \cdots
\\]

Therefore,

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
r_n \propto n^2
\\]

</div>

**Energy of the Electron**

The total energy of the electron is

\\[
E = K + U,
\\]

where \\(K\\) is the kinetic energy and \\(U\\) is the electrostatic potential energy.

**Kinetic Energy**

The kinetic energy of the electron is

\\[
K = \frac{1}{2}mv^2.
\\]

From equation (1),

\\[
mv^2 = \frac{e^2}{4\pi\epsilon_0 r}.
\\]

Therefore,

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
K = \frac{e^2}{8\pi\epsilon_0 r}
\\]

</div>

**Potential Energy**

The electrostatic potential energy of the electron-proton system is

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
U = -\frac{e^2}{4\pi\epsilon_0 r}
\\]

</div>

The negative sign indicates that the electron is in a bound state.

Therefore,

\\[
E = K + U
\\]

gives

\\[
E = \frac{e^2}{8\pi\epsilon_0 r} - \frac{e^2}{4\pi\epsilon_0 r}.
\\]

Hence,

\\[
E = -\frac{e^2}{8\pi\epsilon_0 r}. \qquad (4)
\\]

Substituting

\\[
r_n = \frac{4\pi\epsilon_0\hbar^2}{me^2}n^2
\\]

in equation (4),

\\[
E_n = -\frac{me^4}{8\epsilon_0^2h^2}\frac{1}{n^2}.
\\]

Thus,

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
E_n = -\frac{me^4}{8\epsilon_0^2h^2}\frac{1}{n^2}
\\]

</div>

For the hydrogen atom, this can be written as

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
E_n = -\frac{13.6}{n^2} \text{ eV}
\\]

</div>

Therefore,

\\[
E_1 = -13.6 \text{ eV}, \qquad E_2 = -3.40 \text{ eV}, \qquad E_3 = -1.51 \text{ eV},
\\]

and

\\[
E_4 = -0.85 \text{ eV}.
\\]

The negative sign indicates that the electron is bound to the nucleus.

**Important Results for Hydrogen Atom**

The three most important results of the Bohr model are

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
v_n = \frac{2.18 \times 10^6}{n} \text{ m s}^{-1}
\\]

</div>

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
r_n = 5.29 \times 10^{-11}n^2 \text{ m}
\\]

</div>

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
E_n = -\frac{13.6}{n^2} \text{ eV}
\\]

</div>

Hence,

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
v_n \propto \frac{1}{n}, \qquad r_n \propto n^2, \qquad E_n \propto -\frac{1}{n^2}
\\]

</div>

As \\(n\\) increases,

\\[
n\uparrow \implies v\downarrow, \quad r\uparrow, \quad E\rightarrow 0^-.
\\]

As \\(n \rightarrow \infty\\),

\\[
E_n \rightarrow 0.
\\]

This corresponds to the electron becoming free from the atom. Thus, \\(E=0\\) is taken as the energy of a free electron at infinite separation from the nucleus.

**Hydrogen Spectrum**

The hydrogen atom produces a line spectrum, consisting of a number of discrete wavelengths. These spectral lines are produced when an electron makes a transition from a higher energy level to a lower energy level.

For an emission spectrum,

\\[
h\nu = E_i - E_f, \qquad E_i > E_f.
\\]

Since

\\[
\nu = \frac{c}{\lambda},
\\]

the wavelength of the emitted radiation depends on the difference between the two energy levels.

**Expression for Wave Number**

The energy of an electron in the \\(n\\)th orbit of a hydrogen atom is

\\[
E_n = -\frac{13.6}{n^2}\text{ eV}.
\\]

Suppose an electron makes a transition from an initial orbit \\(n_i\\) to a lower orbit \\(n_f\\), where

\\[
n_i > n_f.
\\]

The energy of the emitted photon is

\\[
h\nu = E_{n_i} - E_{n_f}.
\\]

Therefore,

\\[
h\nu = 13.6\left(\frac{1}{n_f^2}-\frac{1}{n_i^2}\right)\text{ eV}.
\\]

Using

\\[
\nu = \frac{c}{\lambda},
\\]

we get

\\[
\frac{hc}{\lambda} = 13.6\left(\frac{1}{n_f^2}-\frac{1}{n_i^2}\right)\text{ eV}.
\\]

Hence,

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
\frac{1}{\lambda} = R_H\left(\frac{1}{n_f^2}-\frac{1}{n_i^2}\right)
\\]

</div>

where \\(R_H\\) is the Rydberg constant for hydrogen,

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
R_H = 1.097 \times 10^7 \text{ m}^{-1}.
\\]

</div>

Thus, the general expression for the wave number is

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
\bar\nu = \frac{1}{\lambda} = R_H\left(\frac{1}{n_f^2}-\frac{1}{n_i^2}\right)
\\]

</div>

This is known as the Rydberg formula.

**Spectral Series of Hydrogen**

Different spectral series are obtained depending on the final orbit \\(n_f\\) of the electron.

| Series | Final orbit \\(n_f\\) | Initial orbit \\(n_i\\) | Region |
|---|---|---|---|
| Lyman | 1 | 2, 3, 4, ... | Ultraviolet |
| Balmer | 2 | 3, 4, 5, ... | Visible |
| Paschen | 3 | 4, 5, 6, ... | Infrared |
| Brackett | 4 | 5, 6, 7, ... | Infrared |
| Pfund | 5 | 6, 7, 8, ... | Infrared |
| Humphreys | 6 | 7, 8, 9, ... | Infrared |

**Lyman Series**

In the Lyman series, all transitions terminate at the first energy level:

\\[
n_f = 1.
\\]

Therefore,

\\[
n_i = 2, 3, 4, \ldots
\\]

Using the Rydberg formula,

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
\frac{1}{\lambda} = R_H\left(1-\frac{1}{n_i^2}\right)
\\]

</div>

The Lyman series lies in the **ultraviolet** region.

The first line corresponds to

\\[
2 \rightarrow 1,
\\]

while the series limit corresponds to

\\[
n_i \rightarrow \infty, \qquad n_f = 1.
\\]

**Balmer Series**

In the Balmer series, all transitions terminate at the second energy level:

\\[
n_f = 2.
\\]

Therefore,

\\[
n_i = 3, 4, 5, \ldots
\\]

Hence,

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
\frac{1}{\lambda} = R_H\left(\frac{1}{4}-\frac{1}{n_i^2}\right)
\\]

</div>

The Balmer series is particularly important because its prominent lines lie in the **visible** region.

The first four lines are

\\[
3 \rightarrow 2 : H_\alpha
\\]
\\[
4 \rightarrow 2 : H_\beta
\\]
\\[
5 \rightarrow 2 : H_\gamma
\\]
\\[
6 \rightarrow 2 : H_\delta
\\]

The first Balmer line, \\(H_\alpha\\), has wavelength approximately

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
\lambda_{H_\alpha} = 656.3 \text{ nm}
\\]

</div>

and appears in the red region of the visible spectrum.

**Paschen Series**

In the Paschen series,

\\[
n_f = 3,
\\]

and

\\[
n_i = 4, 5, 6, \ldots
\\]

Therefore,

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
\frac{1}{\lambda} = R_H\left(\frac{1}{9}-\frac{1}{n_i^2}\right)
\\]

</div>

The Paschen series lies in the **infrared** region.

The first line corresponds to

\\[
4 \rightarrow 3.
\\]

**Brackett Series**

In the Brackett series,

\\[
n_f = 4,
\\]

and

\\[
n_i = 5, 6, 7, \ldots
\\]

Therefore,

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
\frac{1}{\lambda} = R_H\left(\frac{1}{16}-\frac{1}{n_i^2}\right)
\\]

</div>

The Brackett series lies in the **infrared** region.

The first line corresponds to

\\[
5 \rightarrow 4.
\\]

**Pfund Series**

In the Pfund series,

\\[
n_f = 5,
\\]

and
\\[
n_i = 6, 7, 8, \ldots
\\]

Therefore,

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
\frac{1}{\lambda} = R_H\left(\frac{1}{25}-\frac{1}{n_i^2}\right)
\\]

</div>

The Pfund series lies in the **infrared** region.

The first line corresponds to

\\[
6 \rightarrow 5.
\\]

**Humphreys Series**

In the Humphreys series,

\\[
n_f = 6,
\\]

and

\\[
n_i = 7, 8, 9, \ldots
\\]

Therefore,

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
\frac{1}{\lambda} = R_H\left(\frac{1}{36}-\frac{1}{n_i^2}\right)
\\]

</div>

The Humphreys series lies in the **infrared** region.

The first line corresponds to

\\[
7 \rightarrow 6.
\\]

**Energy-Level Diagram of Hydrogen**

The energy of the electron in the \\(n\\)th orbit is

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
E_n = -\frac{13.6}{n^2}\text{ eV}
\\]

</div>

The first few energy levels are

| \\(n\\) | \\(E_n\\) (eV) |
|---|---|
| 1 | −13.60 |
| 2 | −3.40 |
| 3 | −1.51 |
| 4 | −0.85 |
| 5 | −0.54 |
| 6 | −0.38 |
| 7 | −0.28 |
| \\(\infty\\) | 0 |

The energy levels become closer together as \\(n\\) increases and converge towards

\\[
E = 0.
\\]

*(The original source includes a figure here — an energy-level diagram with horizontal lines for \\(n=1\\) through \\(n=7\\), with vertical arrows marking the transitions belonging to each spectral series: Lyman (to \\(n=1\\)), Balmer (to \\(n=2\\)), Paschen (to \\(n=3\\)), Brackett (to \\(n=4\\)), Pfund (to \\(n=5\\)), and Humphreys (to \\(n=6\\)). If you'd like, I can build this as an actual SVG diagram for the page — just let me know.)*

**Important Points to Remember**

The spectral series can be remembered from their final energy levels:

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\(n_f = 1\\) → Lyman series<br>
\\(n_f = 2\\) → Balmer series<br>
\\(n_f = 3\\) → Paschen series<br>
\\(n_f = 4\\) → Brackett series<br>
\\(n_f = 5\\) → Pfund series<br>
\\(n_f = 6\\) → Humphreys series

</div>

The general Rydberg formula is

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">

\\[
\frac{1}{\lambda} = R_H\left(\frac{1}{n_f^2}-\frac{1}{n_i^2}\right), \qquad n_i > n_f.
\\]

</div>

Thus, every spectral line of hydrogen is associated with a transition between two quantized energy levels.

**Limitations of Bohr's Atomic Model**

Although Bohr's atomic model successfully explained the stability of the hydrogen atom and its line spectrum, it has several important limitations.

1. **Applicable mainly to hydrogen-like atoms:** Bohr's model gives satisfactory results mainly for hydrogen and hydrogen-like ions such as \\(He^+\\), \\(Li^{2+}\\), etc., which contain only one electron. It cannot satisfactorily explain the spectra of multi-electron atoms.

2. **Cannot explain the fine structure of spectral lines:** The spectral lines of hydrogen are not perfectly single lines. Under high resolution, each line is found to consist of several closely spaced components called fine structure. Bohr's model cannot explain this splitting. The fine structure requires effects such as relativistic correction and spin-orbit interaction.

3. **Cannot explain the Zeeman effect:** When an atom is placed in an external magnetic field, its spectral lines may split into several components. This phenomenon is called the Zeeman effect. Bohr's model cannot adequately explain the normal and anomalous Zeeman effects.

4. **Cannot explain the Stark effect:** The splitting of spectral lines in the presence of an external electric field is called the Stark effect. Bohr's model cannot satisfactorily account for this phenomenon.

5. **Cannot explain the intensity of spectral lines:** Bohr's model gives the possible frequencies of emitted radiation but does not provide a satisfactory explanation for the relative intensities of different spectral lines.

6. **Cannot explain selection rules:** Bohr's model does not provide a proper explanation of why some transitions are allowed while others are forbidden. The selection rules are naturally explained from quantum mechanics.

7. **Inconsistent with the wave nature of the electron:** Bohr assumed that the electron moves in definite circular orbits with definite radius and velocity. According to de Broglie's hypothesis and the Heisenberg uncertainty principle, such a definite classical orbit cannot be assigned to an electron. Modern quantum mechanics describes the electron in terms of a wave function and probability distribution, rather than a definite orbit.

8. **Ad hoc quantization condition:** The condition

\\[
mvr = n\hbar
\\]

was introduced as a postulate. Bohr's model does not provide a fundamental reason why the angular momentum should have only these particular values.

9. **Cannot completely explain chemical bonding and atomic structure:** The model does not adequately explain the detailed electronic structure of atoms, chemical bonding, periodic properties, and other properties of matter.

**Summary of Limitations**

The major limitation of Bohr's model can be stated as

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">
Bohr's model successfully explains hydrogen-like atoms,
</div>

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">
but fails to explain many detailed atomic phenomena.
</div>

The most important limitations are

<div style="text-align:center; border:1px solid #333; display:inline-block; padding:6px 14px; margin:10px 0;">
Fine structure of spectral lines<br>
Zeeman effect<br>
Stark effect<br>
Multi-electron atoms<br>
Wave nature of the electron<br>
Heisenberg uncertainty principle
</div>

These limitations led to the development of more refined atomic models, particularly the Sommerfeld atomic model, and ultimately to modern quantum mechanics.

**Sommerfeld's Atomic Model**

Bohr's atomic model successfully explained the gross structure of the hydrogen spectrum, but it could not explain the fine structure of spectral lines. In 1916, Arnold Sommerfeld modified Bohr's model by introducing elliptical orbits and relativistic variation of the electron mass.

**Sommerfeld's Assumptions**

Sommerfeld introduced the following modifications in Bohr's theory.

1. According to Sommerfeld, the electron may move in an elliptical orbit around the nucleus, with the nucleus at one of the foci. The circular orbit of Bohr is a special case of the elliptical orbit.

2. The velocity of an electron moving in an elliptical orbit is not constant. It is maximum at the perihelion and minimum at the aphelion.

3. Since the velocity of the electron in the inner orbits may be appreciably large, the relativistic variation of mass with velocity must be taken into account:

\\[
m = \frac{m_0}{\sqrt{1-v^2/c^2}}
\\]

4. Sommerfeld applied the quantum condition separately to the two independent motions of the electron, namely angular motion and radial motion.

Thus, two quantum numbers are introduced:

\\[
n_\phi = \text{azimuthal quantum number}, \qquad n_r = \text{radial quantum number}.
\\]

They are related to the principal quantum number by

\\[
n_\phi + n_r = n
\\]

**Elliptical Orbit of the Electron**

For an elliptical orbit, the position of the electron can be specified by the polar coordinates \\(r\\) and \\(\phi\\) or \\(\phi\\) and \\(\rho\\) periodically.

Sommerfeld therefore applied the quantum condition to both motions:

\\[
\oint p_\phi\,d\phi = n_\phi h
\\]

and

\\[
\oint p_r\,dr = n_r h. \tag{2}
\\]

Here, \\(p_\phi\\) is the momentum corresponding to angular motion and \\(p_r\\) is the momentum corresponding to radial motion.

**Angular Quantum Condition**

The momentum corresponding to angular motion is the angular momentum of the electron. For an elliptical orbit,

\\[
p_\phi = \text{constant.}
\\]

Therefore, equation (1) becomes

\\[
\int_0^{2\pi} p_\phi\,d\phi = n_\phi h.
\\]

Hence,

\\[
2\pi p_\phi = n_\phi h,
\\]

or

\\[
p_\phi = \frac{n_\phi h}{2\pi} = n_\phi\hbar. \tag{3}
\\]

Thus, the angular momentum of the electron is quantized.

**Radial Quantum Condition**

The radial momentum is

\\[
p_r = m\frac{dr}{dt}.
\\]

Since \\(r\\) is a function of \\(\phi\\),

\\[
\frac{dr}{dt} = \frac{dr}{d\phi}\cdot\frac{d\phi}{dt}.
\\]

Also,\\[
p_\phi = mr^2\frac{d\phi}{dt}.
\\]

Therefore,

\\[
\frac{d\phi}{dt} = \frac{p_\phi}{mr^2}.
\\]

Hence,

\\[
p_r\,dr = m\frac{dr}{dt}\,dr = m\frac{dr}{d\phi}\frac{d\phi}{dt}\,dr = \frac{p_\phi}{r^2}\frac{dr}{d\phi}\,dr.
\\]

Since

\\[
dr = \frac{dr}{d\phi}\,d\phi,
\\]

we obtain

\\[
\boxed{p_r\,dr = \left(\frac{1}{r}\frac{dr}{d\phi}\right)^2 p_\phi\,d\phi.} \tag{4}
\\]

**Equation of the Elliptical Orbit**

The equation of the elliptical orbit in polar coordinates is

\\[
\boxed{\frac{1}{r} = \frac{1+\epsilon\cos\phi}{a(1-\epsilon^2)}} \tag{5}
\\]

where \\(a\\) is the semi-major axis and \\(\epsilon\\) is the eccentricity of the ellipse.

Differentiating equation (5),

\\[
\frac{1}{r}\frac{dr}{d\phi} = \frac{\epsilon\sin\phi}{1+\epsilon\cos\phi}.
\\]

Using equation (4),

\\[
p_r\,dr = \frac{\epsilon^2\sin^2\phi}{(1+\epsilon\cos\phi)^2}p_\phi\,d\phi.
\\]

Substituting in equation (2),

\\[
p_\phi\int_0^{2\pi}\frac{\epsilon^2\sin^2\phi}{(1+\epsilon\cos\phi)^2}\,d\phi = n_r h.
\\]

Let

\\[
I = \int_0^{2\pi}\frac{\epsilon^2\sin^2\phi}{(1+\epsilon\cos\phi)^2}\,d\phi.
\\]

Using integration by parts,

\\[
I = \int_0^{2\pi}\left(\frac{1}{1+\epsilon\cos\phi}-1\right)d\phi.
\\]

Using the standard result

\\[
\int_0^{2\pi}\frac{d\phi}{1+\epsilon\cos\phi} = \frac{2\pi}{\sqrt{1-\epsilon^2}},
\\]

we obtain

\\[
I = \frac{2\pi}{\sqrt{1-\epsilon^2}} - 2\pi.
\\]

Therefore,

\\[
p_\phi\left[\frac{2\pi}{\sqrt{1-\epsilon^2}}-2\pi\right] = n_r h.
\\]

Using

\\[
p_\phi = \frac{n_\phi h}{2\pi},
\\]

we get

\\[
\frac{n_\phi}{\sqrt{1-\epsilon^2}} - n_\phi = n_r.
\\]

Therefore,

\\[
\boxed{n_r + n_\phi = \frac{n_\phi}{\sqrt{1-\epsilon^2}}.}
\\]

Since

\\[
n_r+n_\phi = n,
\\]

we obtain

\\[
\boxed{n = \frac{n_\phi}{\sqrt{1-\epsilon^2}}.} \tag{6}
\\]

**Condition for the Allowed Elliptical Orbits**

From equation (6),

\\[
n = \frac{n_\phi}{\sqrt{1-\epsilon^2}},
\\]

and hence

\\[
1-\epsilon^2 = \frac{n_\phi^2}{n^2}.
\\]

For an ellipse,

\\[
1-\epsilon^2 = \frac{b^2}{a^2},
\\]

where \\(a\\) and \\(b\\) are the semi-major and semi-minor axes, respectively. Therefore,

\\[
\frac{b^2}{a^2} = \frac{n_\phi^2}{n^2}.
\\]

Taking the positive square root,

\\[
\boxed{\frac{b}{a} = \frac{n_\phi}{n}.} \tag{7}
\\]

This is the condition for the allowed elliptical orbits. The eccentricity is therefore

\\[
\boxed{\epsilon = \sqrt{1-\frac{n_\phi^2}{n^2}}.}
\\]

For a given value of \\(n\\),

\\[
n_\phi = 1,2,3,\ldots,n.
\\]

Thus, there are \\(n\\) permitted orbits corresponding to the \\(n\\) possible values of \\(n_\phi\\). For \\(n_\phi = n\\), we have

\\[
\frac{b}{a} = 1,
\\]

and hence \\(a=b\\). The ellipse therefore becomes a circle. Thus, the Bohr circular orbit is a special case of Sommerfeld's elliptical orbit.

**Energy of the Electron**

The total energy of the electron is

\\[
E_n = \text{K.E.} + \text{P.E.}
\\]

The potential energy of the electron in the field of a nucleus of charge \\(+Ze\\) is

\\[
\text{P.E.} = -\frac{Ze^2}{4\pi\epsilon_0 r}.
\\]

After applying the quantum conditions to the elliptical orbit, Sommerfeld obtained

\\[
\boxed{E_n = -\frac{me^4Z^2}{8\epsilon_0^2h^2n^2}.} \tag{8}
\\]

Equivalently,

\\[
\boxed{E_n = -\frac{13.6Z^2}{n^2}\text{ eV}.}
\\]

For hydrogen, \\(Z=1\\):

\\[
\boxed{E_n = -\frac{13.6}{n^2}\text{ eV}.}
\\]

Thus, the energy obtained for the elliptical orbit is the same as that obtained from Bohr's theory. Therefore,

\\[
\boxed{\text{Elliptical orbits alone introduce no new energy levels.}}
\\]

The fine structure of spectral lines is explained by taking the relativistic variation of the electron mass into account.

**Sommerfeld's Relativistic Theory**

The velocity of the electron in an elliptical orbit varies from point to point. It is maximum at the perihelion and minimum at the aphelion.

The velocity of the electron in the inner orbits may be appreciably large. Sommerfeld therefore considered the relativistic variation of the electron mass:

\\[
\boxed{m = \frac{m_0}{\sqrt{1-v^2/c^2}}.}
\\]

Taking this variation of mass into account, Sommerfeld obtained the equation describing the path of the electron as

\\[
\boxed{\frac{1}{r} = \frac{1+\epsilon\cos\psi}{a(1-\epsilon^2)}} \tag{9}
\\]

where

\\[
\psi^2 = 1 - \frac{Z^2c^4}{16\pi^2\epsilon_0^2\hbar^2p_\phi^2c^2}.
\\]

The path of the electron is a rosette; that is, an ellipse whose major axis slowly precesses in the plane of the ellipse about an axis through the nucleus.

**Relativistic Energy**

Taking the relativistic variation of the mass of the electron into account, Sommerfeld obtained the following expression for the total energy:

\\[
\boxed{E_n = -\frac{me^4Z^2}{8\epsilon_0^2h^2n^2} - \frac{me^4Z^2\alpha^2}{8\epsilon_0^2h^2}\left(\frac{n}{n_\phi}-\frac{3}{4}\right)\frac{1}{n^4}} \tag{10}
\\]

where

\\[
\boxed{\alpha = \frac{e^2}{2\epsilon_0ch} \approx \frac{1}{137}.}
\\]

The quantity \\(\alpha\\) is dimensionless and is called the fine-structure constant.

The first term in equation (10) is the energy of the electron obtained from Bohr's theory:

\\[
\boxed{E_n^{(0)} = -\frac{me^4Z^2}{8\epsilon_0^2h^2n^2}.}
\\]

The second term is the Sommerfeld relativistic correction:

\\[
\boxed{\Delta E = -\frac{me^4Z^2\alpha^2}{8\epsilon_0^2h^2}\left(\frac{n}{n_\phi}-\frac{3}{4}\right)\frac{1}{n^4}.}
\\]

Thus,

\\[
\boxed{E_n = E_n^{(0)} + \Delta E.}
\\]

The important point is that the Bohr energy depends only on the principal quantum number \\(n\\), whereas the relativistic correction depends on both \\(n\\) and \\(n_\phi\\):

\\[
\boxed{E_n = E(n, n_\phi).}
\\]

For a given \\(n\\),

\\[
n_\phi = 1,2,\ldots,n.
\\]

Therefore, the energy level corresponding to a given \\(n\\) splits into \\(n\\) components. Thus,

\\[
\boxed{\text{Relativistic correction} \longrightarrow \text{splitting of energy levels} \longrightarrow \text{fine structure of spectral lines.}}
\\]

**Limitations of Sommerfeld's Atomic Model**

The Sommerfeld model was an important improvement over Bohr's model, but it has several limitations.

1. It cannot satisfactorily explain the spectra of multi-electron atoms.
2. Electron spin is not included in the original Sommerfeld model.
3. It cannot adequately explain the anomalous Zeeman effect.
4. It cannot satisfactorily explain the Stark effect.
5. The model assumes definite classical orbits for electrons, which is inconsistent with the later quantum-mechanical description based on the uncertainty principle.
6. The quantum conditions are introduced as postulates rather than being derived from a complete quantum theory.
7. It cannot explain the complete observed structure of atomic spectra and was eventually replaced by modern quantum mechanics.

**Important Results**

The important results of Sommerfeld's atomic model are

\\[
\boxed{\oint p_\phi\,d\phi = n_\phi h}
\\]

\\[
\boxed{\oint p_r\,dr = n_r h}
\\]

\\[
\boxed{n = n_r + n_\phi}
\\]

\\[
\boxed{n = \frac{n_\phi}{\sqrt{1-\epsilon^2}}}
\\]

\\[
\boxed{\frac{b}{a} = \frac{n_\phi}{n}}
\\]

\\[
\boxed{E_n = -\frac{me^4Z^2}{8\epsilon_0^2h^2n^2}}
\\]

and, with relativistic correction,

\\[
\boxed{E_n = -\frac{me^4Z^2}{8\epsilon_0^2h^2n^2} - \frac{me^4Z^2\alpha^2}{8\epsilon_0^2h^2}\left(\frac{n}{n_\phi}-\frac{3}{4}\right)\frac{1}{n^4}.}
\\]

The development of Sommerfeld's model can be summarized as

\\[
\boxed{\text{Bohr model} \rightarrow \text{Elliptical orbits} \rightarrow \text{Two quantum numbers} \rightarrow \text{Relativistic correction} \rightarrow \text{Fine structure.}}
\\]

**Vector Atom Model**

The Bohr–Sommerfeld model successfully explained the main features of the hydrogen spectrum and, with relativistic correction, gave an explanation of the fine structure. However, it could not satisfactorily explain several important observations, particularly the splitting of spectral lines in a magnetic field and the detailed structure of spectra of atoms containing more than one electron.

To explain these observations, the vector atom model was developed. In this model, the angular momentum of an electron is treated as a vector quantity, and the atom is described in terms of the orbital and spin angular momenta of its electrons.

The vector atom model is based mainly on two important ideas:

**Spatial Quantization**

In classical physics, an angular momentum vector can have any orientation in space. According to quantum theory, however, the angular momentum vector can have only certain permitted orientations with respect to a specified direction, usually the direction of an external magnetic field.

This phenomenon is called spatial quantization.

For an electron having orbital angular momentum quantum number \\(l\\), the component of orbital angular momentum along the field direction is

\\[
L_z = m_l\hbar,
\\]

where

\\[
m_l = -l, -(l-1), \ldots, 0, \ldots, (l-1), l.
\\]

Thus, there are

\\[
\boxed{2l+1}
\\]

possible orientations of the orbital angular momentum vector.

The angle \\(\theta\\) made by the orbital angular momentum vector with the magnetic-field direction is given by

\\[
\boxed{\cos\theta = \frac{m_l}{\sqrt{l(l+1)}}}
\\]

Thus, the orbital angular momentum cannot take an arbitrary orientation in space.

**Spin of the Electron**

In addition to its orbital angular momentum, an electron possesses an intrinsic angular momentum called spin angular momentum. It is not associated with the actual spinning of the electron like a classical rotating sphere; it is an intrinsic quantum-mechanical property of the electron.

The spin quantum number of an electron is

\\[
\boxed{s = \frac{1}{2}.}
\\]

The magnitude of the spin angular momentum is

\\[
S = \sqrt{s(s+1)}\,\hbar = \frac{\sqrt{3}}{2}\hbar.
\\]

The component of spin angular momentum along a specified direction is

\\[
S_z = m_s\hbar,
\\]

where

\\[
m_s = \pm\frac{1}{2}.
\\]

Thus, the spin angular momentum has two possible orientations with respect to a given direction.

These two ideas—spatial quantization of angular momentum and intrinsic spin of the electron—form the basis of the vector atom model. The quantum numbers used to describe an electron and the atom as a whole are introduced on this basis.

**Quantum Numbers Associated with the Vector Atom Model**

The state of an electron in an atom is specified by a set of quantum numbers. In the vector atom model, the following quantum numbers are used.

**Principal Quantum Number (n)**

The principal quantum number \\(n\\) is identical with the one used in the Bohr theory. It specifies the electron shell, starting from the innermost shell.

\\[
\boxed{n = 1, 2, 3, \ldots}
\\]

**Orbital Quantum Number (l)**

The orbital quantum number \\(l\\) specifies the orbital angular momentum of the electron. For a given value of \\(n\\),

\\[
\boxed{l = 0, 1, 2, \ldots, (n-1)}
\\]

Thus, for example,

| \\(l\\) | Designation |
|---|---|
| 0 | s |
| 1 | p |
| 2 | d |
| 3 | f |

The magnitude of the orbital angular momentum is

\\[
L = \sqrt{l(l+1)}\,\hbar.
\\]

The z-component of orbital angular momentum is

\\[
L_z = m_l\hbar.
\\]

**Spin Quantum Number (s)**

The spin quantum number \\(s\\) represents the intrinsic angular momentum of the electron. For an electron,

\\[
\boxed{s = \frac{1}{2}}
\\]

The magnitude of the spin angular momentum is

\\[
S = \sqrt{s(s+1)}\,\hbar.
\\]

Thus, for an electron,

\\[
S = \frac{\sqrt{3}}{2}\hbar.
\\]

The spin quantum number has only one value,

\\[
\boxed{s = \frac{1}{2}.}
\\]

**Total Angular Momentum Quantum Number (j)**

The total angular momentum of the electron is obtained by combining its orbital angular momentum and spin angular momentum. Thus,

\\[
\vec{j} = \vec{l}+\vec{s}.
\\]

The possible values of \\(j\\) are

\\[
j = l+s, l+s-1, \ldots, |l-s|.
\\]

For an electron, \\(s=\dfrac{1}{2}\\), so

\\[
\boxed{j = l+\frac{1}{2}, \quad l-\frac{1}{2}}
\\]

with the restriction that \\(j\\) must be positive.

For example, if

\\[
l=2, \quad s=\frac{1}{2},
\\]

then

\\[
j = \frac{5}{2}, \quad \frac{3}{2}.
\\]

The magnitude of total angular momentum is

\\[
J = \sqrt{j(j+1)}\,\hbar.
\\]

**Magnetic Orbital Quantum Number \\((m_l)\\)**

The magnetic orbital quantum number \\(m_l\\) represents the projection of the orbital angular momentum on the direction of the magnetic field.

The possible values of \\(m_l\\) are

\\[
m_l = l, l-1, l-2, \ldots, 0, \ldots, -(l-1), -l.
\\]

Thus, there are

\\[
\boxed{2l+1}
\\]

possible values of \\(m_l\\).

The component of orbital angular momentum in the field direction is

\\[
L_z = m_l\hbar.
\\]

If \\(\theta\\) is the angle between the orbital angular momentum vector and the magnetic-field direction, then

\\[
\boxed{\cos\theta = \frac{m_l}{\sqrt{l(l+1)}}}
\\]

Hence, the orbital angular momentum vector can have only \\(2l+1\\) permitted orientations. This is known as spatial quantization.

**Magnetic Spin Quantum Number \\((m_s)\\)**

The magnetic spin quantum number \\(m_s\\) represents the projection of the spin angular momentum on the direction of the magnetic field. For an electron,

\\[
s=\frac{1}{2},
\\]

and therefore

\\[
\boxed{m_s = +\frac{1}{2}, \quad -\frac{1}{2}}
\\]

Thus, the spin angular momentum can have only two possible orientations with respect to the magnetic-field direction.

**Magnetic Total Angular Momentum Quantum Number \\((m_j)\\)**

The magnetic total angular momentum quantum number \\(m_j\\) represents the projection of the total angular momentum vector on the direction of the magnetic field. For a given \\(j\\),

\\[
m_j = j, j-1, j-2, \ldots, 0, \ldots, -(j-1), -j.
\\]

Thus, there are

\\[
\boxed{2j+1}
\\]

possible values of \\(m_j\\).

For a single electron,

\\[
j = l\pm\frac{1}{2},
\\]

and consequently \\(m_j\\) has odd half-integral values.

For example, if

\\[
j=\frac{3}{2},
\\]

then

\\[
m_j = \frac{3}{2}, \frac{1}{2}, -\frac{1}{2}, -\frac{3}{2}.
\\]

**Quantum Numbers of an Electron**

The state of an electron in an atom is completely specified by the four quantum numbers

\\[
\boxed{n, l, m_l, m_s.}
\\]

In spectroscopic notation, small letters \\(l, s, p, d, f, g, \ldots\\) are used to describe the state of the electron, whereas capital letters \\(L, S, J\\) and \\(S, P, D, F, G, \ldots\\) are used to describe the state of the atom as a whole.

**Coupling Schemes**

In an atom containing two or more electrons, each electron possesses orbital angular momentum and spin angular momentum. These angular momenta can combine in different ways depending on the relative strengths of their interactions.

The two important coupling schemes are:

1. \\(L-S\\) coupling or Russell–Saunders coupling.
2. \\(j-j\\) coupling.

The type of coupling that occurs depends mainly on the relative strengths of the interactions between the orbital and spin angular momenta.

**\\(L-S\\) Coupling (Russell–Saunders Coupling)**

\\(L-S\\) coupling is the coupling scheme that occurs most frequently, particularly in light atoms.

In this scheme, the orbital angular momenta of all the electrons first combine together to form a resultant orbital angular momentum \\(\vec{L}\\). Independently, the spin angular momenta of all the electrons combine together to form a resultant spin angular momentum \\(\vec{S}\\).

Thus,

\\[
\boxed{\vec{L} = \sum_i \vec{l}_i}
\\]

and

\\[
\boxed{\vec{S} = \sum_i \vec{s}_i}
\\]

The resultant orbital angular momentum \\(\vec{L}\\) and resultant spin angular momentum \\(\vec{S}\\) then combine to give the total angular momentum \\(\vec{J}\\) of the atom:

\\[
\boxed{\vec{J} = \vec{L}+\vec{S}.}
\\]

Thus, the \\(L-S\\) coupling scheme may be summarized as

\\[
\boxed{\vec{L} = \sum_i \vec{l}_i, \quad \vec{S} = \sum_i \vec{s}_i, \quad \vec{J} = \vec{L}+\vec{S}}
\\]

This coupling is most important when the interaction between the orbital angular momenta and spin angular momenta of different electrons is stronger than the spin-orbit interaction.

For \\(L-S\\) coupling, the possible values of \\(J\\) are

\\[
\boxed{J = L+S, L+S-1, \ldots, |L-S|}
\\]

For example, if

\\[
L=2, \quad S=\frac{1}{2},
\\]

then

\\[
J = \frac{5}{2}, \frac{3}{2}.
\\]

**\\(j-j\\) Coupling**

The \\(j-j\\) coupling scheme becomes important when the spin-orbit interaction of each individual electron is stronger than the interactions between the orbital and spin angular
   
<button class="print-btn" data-html2canvas-ignore="true" onclick="exportUnit('am-unit-1','Atomic-Structure-Notes.pdf')">Export this unit to PDF</button>
</details>

<details class="unit-block" id="am-unit-2">
<summary>Unit 2: Many-Electron Atoms</summary>
<p><em>Write your notes here.</em></p>
<button class="print-btn" data-html2canvas-ignore="true" onclick="exportUnit('am-unit-2','Many-Electron-Atoms-Notes.pdf')">Export this unit to PDF</button>
</details>

<details class="unit-block" id="am-unit-3">
<summary>Unit 3: Molecular Spectra</summary>
<p><em>Write your notes here.</em></p>
<button class="print-btn" data-html2canvas-ignore="true" onclick="exportUnit('am-unit-3','Molecular-Spectra-Notes.pdf')">Export this unit to PDF</button>
</details>

<details class="unit-block" id="am-unit-4">
<summary>Unit 4: Electronic Spectra & Special Topics</summary>
<p><em>Write your notes here.</em></p>
<button class="print-btn" data-html2canvas-ignore="true" onclick="exportUnit('am-unit-4','Electronic-Spectra-Notes.pdf')">Export this unit to PDF</button>
</details>

</details>

<!-- Add more papers for 5th Semester by copying an entire <details>...</details> block above and changing the paper name and its unit ids. -->

</div>

<div class="tab-content" id="sem6">
<p><em>No papers added yet for 6th Semester. Add papers here the same way as other semesters &mdash; copy a paper &lt;details&gt; block and update names/ids. Room for two or more papers.</em></p>
</div>

<div class="tab-content" id="mdc">

<details open>
<summary><strong>MDC 1st Semester</strong></summary>
<p><em>No papers added yet. Add a paper by copying a paper &lt;details&gt; block from another semester and nesting it here.</em></p>
</details>

<details>
<summary><strong>MDC 2nd Semester</strong></summary>
<p><em>No papers added yet.</em></p>
</details>

<details>
<summary><strong>MDC 3rd Semester</strong></summary>
<p><em>No papers added yet.</em></p>
</details>

</div>

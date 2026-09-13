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
The three length elements are given by: \\(ds_1 = dr\\), \\(ds_2 = rd\theta\\), \\(ds_3 = r\sin\theta d\phi\\). Thus the line element can be written as \\(d\vec{s} = dr\\), \\(hat{e}_r\\) + \\(rd\theta\\) \\(\hat{e}_\theta\\) + \\(r\sin\theta\d\phi\\) \\(\hat{e}_\phi\\). The surface element on a constant \\(r\\) surface is \\(dA_r = ds_2ds_3 = r^2\sin\theta\,d\theta\,d\phi\\). The other two surface elements are \\(dA_\theta = r\sin\theta\,dr\,d\phi\\) and \\(dA_\phi = r\,dr\,d\theta\\). The volume element is given by, \\(dV = ds_1ds_2ds_3 = r^2\sin\theta\dr\,d\theta\,d\phi\\).

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

We can easily show that \\(\hat{e}_r\cdot\hat{e}_\theta = \hat{e}_\theta\cdot\hat{e}_\phi = \hat{e}_\phi\cdot\hat{e}_r = 0\\) which confirms that they are mutually perpendicular and the system is orthogonal. The gradient, divergence, curl, and laplacian in spherical coordinates are given by,

**Gradient:**

\\[
\vec{\nabla}f = \frac{\partial f}{\partial r}\hat{e}_r + \frac{1}{r}\frac{\partial f}{\partial\theta}\hat{e}_\theta + \frac{1}{r\sin\theta}\frac{\partial f}{\partial\phi}\hat{e}_\phi
\\]

**Divergence:**

\\[
\vec{\nabla}\cdot\vec{A} = \frac{1}{r^2}\frac{\partial}{\partial r}(r^2A_r) + \frac{1}{r\sin\theta}\frac{\partial}{\partial\theta}(\sin\theta A_\theta) + \frac{1}{r\sin\theta}\frac{\partial A_\phi}{\partial\phi}
\\]

**Curl:**

\\[
\vec{\nabla}\times\vec{A} = \frac{1}{r^2\sin\theta}\begin{vmatrix} \hat{e}_r & r\hat{e}_\theta & r\sin\theta\hat{e}_\phi \\\\ \frac{\partial}{\partial r} & \frac{\partial}{\partial\theta} & \frac{\partial}{\partial\phi} \\\\ A_r & rA_\theta & r\sin\theta A_\phi \end{vmatrix}
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

Let \\(\vec{f} = f_r\hat{e}_r + f_\theta\hat{e}_\theta + f_\phi\hat{e}_\phi\\) be the function in a spherical coordinate system. The three components of the function are given by

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

The three length elements are given by: \\(ds_1=d\rho\\), \\(ds_2=\rho\,d\phi\\), \\(ds_3=dz\\). Thus the line element can be written as \\(d\vec{s} = d\rho\,\hat{e}_\rho + \rho\,d\phi\,\hat{e}_\phi + dz\,\hat{e}_z\\). The surface element on a constant \\(\rho\\) surface is \\(dA_\rho = ds_2ds_3 = \rho\,d\phi\,dz\\). The other two surface elements are \\(dA_\phi = dr\,dz\\) and \\(dA_z = \rho\,d\rho\,d\phi\\). The volume element is given by, \\(dV = ds_1ds_2ds_3 = \rho\,d\rho\,d\phi\,dz\\).

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

We can easily show that \\(\hat{e}_\rho\cdot\hat{e}_\phi = \hat{e}_\phi\cdot\hat{e}_z = \hat{e}_z\cdot\hat{e}_\rho = 0\\) which confirms that they are mutually perpendicular and the system is orthogonal. The gradient, divergence, curl, and laplacian in cylindrical coordinates are given by,

**Gradient:**

\\[
\vec{\nabla}f = \frac{\partial f}{\partial\rho}\hat{e}_\rho + \frac{1}{\rho}\frac{\partial f}{\partial\phi}\hat{e}_\phi + \frac{\partial f}{\partial z}\hat{e}_z
\\]

**Divergence:**

\\[
\vec{\nabla}\cdot\vec{A} = \frac{1}{\rho}\frac{\partial}{\partial\rho}(\rho A_\rho) + \frac{1}{\rho}\frac{\partial}{\partial\phi}(A_\phi) + \frac{\partial}{\partial z}(A_z)
\\]

**Curl:**

\\[
\vec{\nabla}\times\vec{A} = \frac{1}{\rho}\begin{vmatrix} \hat{e}_\rho & \rho\hat{e}_\phi & \hat{e}_z \\\\ \frac{\partial}{\partial\rho} & \frac{\partial}{\partial\phi} & \frac{\partial}{\partial z} \\\\ A_\rho & \rho A_\phi & A_z \end{vmatrix}
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

Let \\(\vec{F} = F_\rho\hat{e}_\rho + F_\phi\hat{e}_\phi + F_z\hat{e}_z\\) be the function in the cylindrical coordinate system. The components of the vector are given by,

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
<summary>Unit 3: Ordinary Differential Equations</summary>
<p><em>Write your notes here.</em></p>
<button class="print-btn" data-html2canvas-ignore="true" onclick="exportUnit('mp-unit-3','ODE-Notes.pdf')">Export this unit to PDF</button>
</details>

<details class="unit-block" id="mp-unit-4">
<summary>Unit 4: Complex Analysis</summary>
<p><em>Write your notes here.</em></p>
<button class="print-btn" data-html2canvas-ignore="true" onclick="exportUnit('mp-unit-4','Complex-Analysis-Notes.pdf')">Export this unit to PDF</button>
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
<p><em>Write your notes here.</em></p>
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

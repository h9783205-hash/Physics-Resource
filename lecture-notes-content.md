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
<button class="print-btn" data-html2canvas-ignore="true" onclick="exportUnit('mp-unit-1','Vector-Calculus-Notes.pdf')">Export this unit to PDF</button>
</details>

<details class="unit-block" id="mp-unit-2">
<summary>Unit 2: Curvilinear Coordinates</summary>
<p><em>Write your notes here.</em></p>
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
